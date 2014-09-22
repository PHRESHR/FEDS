'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var slash = require('slash');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var bowerResolve = require('bower-resolve');
var config = require('./config.json');

gulp.task('bundle:vendor', function () {
  return bundleVendor(true);
});

gulp.task('bundle:vendor:dist', function () {
  return bundleVendor(false);
});

function bundleVendor(debug) {
  var basedir = process.cwd();
  var bundler = browserify({
    noparse: true,
    debug: debug
  });

  buildConfig.bower.packageIds.forEach(function (id) {
    var packagePath = bowerResolve.fastReadSync(id);
    packagePath = slash(packagePath.replace(basedir, '.'));

    bundler.require(packagePath, {
      expose: id,
      basedir: basedir
    });
  });

  return bundler.bundle()
    .on('error', function (error) {
      $.util.log($.util.colors.red('Error while bundling vendor scripts: ' + error.message));
      $.util.beep();
      this.end();
    })
    .pipe(source('vendor.bundle.js'))
    .pipe(gulp.dest(global.isDist ? config.scripts.build : config.scripts.tmp));
}
