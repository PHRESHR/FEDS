'use strict';

var _ = require('lodash');
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserify = require('browserify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');
var config = require('./config.json');

gulp.task('bundle:app', function () {
  return bundleApp(true);
});

gulp.task('bundle:app:dist', function () {
  return bundleApp(false);
});

function bundleApp(watch) {
  var opts = watch ? _.extend(watchify.args, {debug: true, fullPaths: false}) : {};
  var bundler = browserify(config.scripts.app, opts);

  if (watch) {
    bundler = watchify(bundler);
  }

  buildConfig.bower.packageIds.forEach(function (lib) {
    bundler.external(lib);
  });

  function rebundle() {
    return bundler.bundle()
      .on('error', function (error) {
        $.util.log($.util.colors.red('Error while bundling app scripts: ' + error.message));
        $.util.beep();
        this.end();
      })
      .pipe(source('app.bundle.js'))
      .pipe($.if(!watch, $.unpathify()))
      .pipe(gulp.dest(global.isDist ? config.scripts.build : config.scripts.tmp));
  }

  if (watch) {
    bundler.on('update', rebundle);
  }

  return rebundle();
}
