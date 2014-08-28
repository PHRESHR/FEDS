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

// gulp.task('libs', function() {
//
//   var b = watchify(browserify();
//
//   // get all bower components ids and resolve the ids to their 'endpoint', which we need for require()
//   bowerPackageIds.forEach(function (id) {
//     b.require(bowerResolve.fastReadSync(id), { expose: id });
//   });
//
//   b.transform({
//     global: true
//   }, ngAnnotate);
//
//   b.transform({
//     global: true
//   }, uglifyify);
//
//   return b.bundle()
//     .pipe(source('libs.js'))
//     .pipe($.streamify($.rename({suffix: '.min'})))
//     .pipe(gulp.dest('.tmp/scripts'));
// });
//
//
// /**
//  * Browserify using your main application entry point, 'external'ising the bower components on prebundle
//  */
// gulp.task('bundle-js', function() {
//
//   var b = watchify(browserify('./app/scripts/main.js');
// //
//   // get all bower components ids
//   bowerPackageIds.forEach(function (id) {
//     b.external(id);
//   });
//
//   b.transform({
//     global: true
//   }, ngAnnotate);
//
//   b.transform({
//     global: true
//   }, uglifyify);
//
//   return b.bundle()
//     .pipe(source('main.js'))
//     .pipe($.streamify($.rename({suffix: '.min'})))
//     .pipe(gulp.dest('.tmp/scripts'));
// });

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
      .pipe(gulp.dest( dist ? '.tmp/scripts' : './app/scripts/' ))
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
      .pipe(gulp.dest( dist ? '.tmp/scripts' : './app/scripts/' ))
      .pipe(reload({stream: true, once: true}));
  };

  // rebundle on change
  b.on('update', bundle);
  return bundle();
});

var SassOptions = {
  sourcemap: true,
  style: 'compact',
  precision: 10
};
// set minifier to false to keep Sass sourcemaps support
var PleeeaseOptions = {
  optimizers: {
    minifier: false
  }
};

// Compile and Automatically Prefix Stylesheets
gulp.task('styles', function() {

  return gulp.src([
        'app/styles/*.scss'
    ])
    .pipe($.changed('.tmp/styles', {extension: '.css'}))
    .pipe($.if('*.scss', $.rubySass(SassOptions)
    .on('error', console.error.bind(console))
    ))
    .pipe($.pleeease(PleeeaseOptions))
    .pipe($.rename({suffix: '.min'}))
    .pipe(gulp.dest('.tmp/styles'))
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
    'app/**/*',
    '!app/views/*.html',
    '!app/*.html'
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

// Views task
gulp.task('views', function() {

  // Put our index.html in the dist folder
  gulp.src('app/index.html')
    .pipe(gulp.dest('dist/'));

  // Process any other view files from app/views
  return gulp.src('app/views/**/*.html')
    .pipe($.angularTemplatecache({
      standalone: true
  }))
    .pipe(gulp.dest('app/scripts'))
    .pipe($.size({title: 'views'}));
});

// Clean Output Directory
gulp.task('clean', del.bind(null, ['.tmp', 'dist']));

// Watch Files For Changes & Reload
gulp.task('serve', ['styles', 'views', 'libs', 'bundle-js'], function () {
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

  gulp.watch(['app/**/*.html'], ['views', reload]);
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
  runSequence('styles', 'views', 'libs', 'bundle-js', ['jshint', 'images', 'fonts', 'copy'], cb);
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
