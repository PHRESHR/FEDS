'use strict';

/* browserify task
   ---------------
   Bundle javascripty things with browserify!

   If the watch task is running, this uses watchify instead
   of browserify for faster bundling using caching.
*/

var gulp         = require('gulp');
var $            = require('gulp-load-plugins')();
var browserify   = require('browserify');
var watchify     = require('watchify');
var uglifyify    = require('uglifyify');
var ngAnnotate   = require('browserify-ngannotate');
var bundleLogger = require('../util/bundleLogger');
var config       = require('./config.json');
var handleErrors = require('../util/handleErrors');
var source       = require('vinyl-source-stream');
var browserSync  = require('browser-sync');
var reload       = browserSync.reload;

gulp.task('browserify', ['templateCache'], function() {
  var bundler = browserify({
    // Required watchify args
    cache: {}, packageCache: {}, fullPaths: false,
    // Specify the entry point of your app
    entries: [config.scripts.browserify],
    // Add file extentions to make optional in your requires
    extensions: ['.coffee', '.hbs'],
    // Enable source maps!
    debug: true
  });

  bundler.transform({
    global: true
  }, ngAnnotate);

  bundler.transform({
    global: true
  }, uglifyify);

  var bundle = function() {
    // Log when bundling starts
    bundleLogger.start();

    return bundler
      .bundle()
      // Report compile errors
      .on('error', function(e) {
        console.log('Watchify Error', e);
      })
      .on('error', handleErrors)
      // Use vinyl-source-stream to make the
      // stream gulp compatible. Specifiy the
      // desired output filename here.
      .pipe(source('main.js'))
      .pipe($.streamify($.rename({suffix: '.min'})))
      // Specify the output destination
      .pipe(gulp.dest(config.scripts.tmp))
      // Log when bundling completes!
      .on('end', bundleLogger.end)
      .pipe(reload({stream: true, once: true}));
  };

  if(global.isWatching) {
    bundler = watchify(bundler);
    // Rebundle with watchify on changes.
    bundler.on('update', bundle);
  }

  return bundle();
});
