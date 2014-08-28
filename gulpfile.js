/**
 *
 *  Web Starter Kit
 *  Copyright 2014 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */

'use strict';

// Include Gulp & Tools We'll Use
var gulp          = require('gulp'),
    $             = require('gulp-load-plugins')(),
    _             = require('lodash'),
    del           = require('del'),
    runSequence   = require('run-sequence'),
    browserify    = require('browserify'),
    watchify      = require('watchify'),
    bowerResolve  = require('bower-resolve'),
    uglifyify     = require('uglifyify'),
    ngAnnotate    = require('browserify-ngannotate'),
    source        = require('vinyl-source-stream'),
    browserSync   = require('browser-sync'),
    pagespeed     = require('psi'),
    reload        = browserSync.reload;

var AUTOPREFIXER_BROWSERS = [
  'ie >= 10',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4.4',
  'bb >= 10'
];

var SassOptions = {
  sourcemap: true,
  style: 'expanded',
  precision: 10
};

// read bower.json and get dependencies' package ids
var bowerManifest = {};
try {
    bowerManifest = require('./bower.json');
} catch (e) {
    // does not have a bower.json manifest
}
var bowerPackageIds = _.keys(bowerManifest.dependencies);

// Lint JavaScript
gulp.task('jshint', function () {
  return gulp.src(['app/scripts/**/*.js', '!app/scripts/templates.js'])
    .pipe(reload({stream: true, once: true}))
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe($.if(!browserSync.active, $.jshint.reporter('fail')));
});

// Watchify js
var dist = false; // set to true when `default` task is run
// Libs
gulp.task('libs', function() {
  var b = watchify(browserify( {
    cache: {},
    packageCache: {},
    fullPaths: true,
    debug: true
  }));

  // get all bower components ids and resolve the ids to their 'endpoint', which we need for require()
  bowerPackageIds.forEach(function (id) {
    b.require(bowerResolve.fastReadSync(id), { expose: id });
  });

  b.transform({
    global: true
  }, ngAnnotate);

  b.transform({
    global: true
  }, uglifyify);

  var bundle = function() {
    return b
      .bundle()
      .on('error', function(e) {
        console.log('Watchify Error', e);
      })
      .pipe(source('libs.js'))
      .pipe($.streamify($.rename({suffix: '.min'})))
      // destination changes when `dist` is set to true
      .pipe(gulp.dest( dist ? './dist/scripts' : '.tmp/scripts/' ))
      .pipe(reload({stream: true, once: true}));
  };

  // rebundle on change
  b.on('update', bundle);
  return bundle();
});

// Bundle
gulp.task('bundle-js', function() {
  var b = watchify(browserify('./app/scripts/main.js', {
    cache: {},
    packageCache: {},
    fullPaths: true,
    debug: true
  }));

  // get all bower components ids
  bowerPackageIds.forEach(function (id) {
    b.external(id);
  });

  b.transform({
    global: true
  }, ngAnnotate);

  b.transform({
    global: true
  }, uglifyify);

  var bundle = function() {
    return b
      .bundle()
      .on('error', function(e) {
        console.log('Watchify Error', e);
      })
      .pipe(source('main.js'))
      .pipe($.streamify($.rename({suffix: '.min'})))
      // destination changes when `dist` is set to true
      .pipe(gulp.dest( dist ? './dist/scripts' : '.tmp/scripts' ))
      .pipe(reload({stream: true, once: true}));
  };

  // rebundle on change
  b.on('update', bundle);
  return bundle();
});

// Compile and Automatically Prefix Stylesheets
gulp.task('styles', function() {

  return gulp.src([
        'app/styles/*.scss'
    ])
    .pipe($.changed('.tmp/styles', {extension: '.css'}))
    .pipe($.if('*.scss', $.rubySass(SassOptions)
    .on('error', console.error.bind(console))
    ))
    .pipe($.autoprefixer(AUTOPREFIXER_BROWSERS))
    .pipe(gulp.dest( dist ? './dist/styles' : '.tmp/styles' ))
    .pipe($.size({title: 'styles'}));

});

// Optimize Images
gulp.task('images', function () {
  return gulp.src('app/images/**/*')
    .pipe($.cache($.imagemin({
      progressive: true,
      interlaced: true
    })))
    .pipe(gulp.dest('dist/images'))
    .pipe($.size({title: 'images'}));
});

// Copy All Files At The Root Level (app)
gulp.task('copy', function () {
  return gulp.src([
    'app/index.html',
    '!app/views/*.html',
    '!app/scripts/**/*.js'
  ], {
    dot: true
  }).pipe(gulp.dest('dist'))
    .pipe($.size({title: 'copy'}));
});

// Copy Web Fonts To Dist
gulp.task('fonts', function () {
  return gulp.src(['app/fonts/**'])
    .pipe(gulp.dest('dist/fonts'))
    .pipe($.size({title: 'fonts'}));
});

// Scan Your HTML For Assets & Optimize Them
gulp.task('html', function () {
  var assets = $.useref.assets({searchPath: '{.tmp,app,dist}'});

  return gulp.src('app/**/*.html')
    .pipe(assets)
    // Concatenate And Minify JavaScript
    .pipe($.if('*.js', $.uglify({preserveComments: 'some'})))
    // Concatenate And Minify Styles
    .pipe($.if('*.css', $.csso()))
    .pipe(assets.restore())
    .pipe($.useref())
    // Output Files
    .pipe(gulp.dest('dist'))
    .pipe($.size({title: 'html'}));
});

// Angular template cache task
gulp.task('templateCache', function() {

  // Put our index.html in the dist folder
  // gulp.src('app/index.html')
  //   .pipe(gulp.dest('dist/'));

  // Process any other view files from app/views
  return gulp.src('app/views/**/*.html')
    .pipe($.angularTemplatecache({
      standalone: true
  }))
    .pipe(gulp.dest('app/scripts/.templates'))
    .pipe($.size({title: 'Angular templateCache'}));
});

// Clean Output Directory
gulp.task('clean', del.bind(null, ['.tmp', 'dist', 'app/scripts/templates']));

// Watch Files For Changes & Reload
gulp.task('serve', ['styles', 'templateCache', 'libs', 'bundle-js'], function () {
  browserSync({
    notify: false,
    // Run as an https by uncommenting 'https: true'
    // Note: this uses an unsigned certificate which on first access
    //       will present a certificate warning in the browser.
    // https: true,
    server: {
      baseDir: ['.tmp', 'app']
    }
  });

  gulp.watch(['app/**/*.html'], ['views', 'html', reload]);
  gulp.watch(['app/styles/**/*.{scss,css}'], ['styles', reload]);
  gulp.watch(['app/scripts/**/*.js'], ['jshint', 'libs', 'bundle-js', reload]);
  gulp.watch(['app/images/**/*'], reload);
});

// Build and serve the output from the dist build
gulp.task('serve:dist', ['default'], function () {
  browserSync({
    notify: false,
    // Run as an https by uncommenting 'https: true'
    // Note: this uses an unsigned certificate which on first access
    //       will present a certificate warning in the browser.
    // https: true,
    server: {
      baseDir: 'dist'
    }

  });
});

// Build Production Files, the Default Task
gulp.task('default', ['clean'], function (cb) {
  dist = true; // change Watchify's build destination
  runSequence('styles', 'templateCache', 'libs', 'bundle-js', ['jshint', 'html', 'images', 'fonts', 'copy'], cb);
});

// Run PageSpeed Insights
// Update `url` below to the public URL for your site
gulp.task('pagespeed', pagespeed.bind(null, {
  // By default, we use the PageSpeed Insights
  // free (no API key) tier. You can use a Google
  // Developer API key if you have one. See
  // http://goo.gl/RkN0vE for info key: 'YOUR_API_KEY'
  url: 'https://example.com',
  strategy: 'mobile'
}));

// Load custom tasks from the `tasks` directory
try { require('require-dir')('tasks'); } catch (err) {}
