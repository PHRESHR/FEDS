'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var config = require('./config.json');

function initBrowserSync(baseDir, files, useProxy, browser) {
  var config = {
    server: {
      baseDir: baseDir
    },
    browser: browser ? browser : 'default',
    open: true,
    notify: false
  };

  browserSync.instance = browserSync.init(files, config);
}

gulp.task('server:dev', function () {
  var baseDir = [config.base.tmp, config.base.app];
  var files = [
    config.styles.files,
    config.scripts.files,
    config.html.files,
    config.assets.files
  ];
  initBrowserSync(baseDir, files, false);
});

gulp.task('server:dist', function () {
  initBrowserSync('dist');
});
