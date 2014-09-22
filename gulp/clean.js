'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('./config.json');

gulp.task('clean', function () {
  return gulp.src([config.base.tmp, config.base.build, config.views.build], { read: false })
    .pipe($.rimraf());
});
