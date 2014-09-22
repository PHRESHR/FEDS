'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('./config.json');

gulp.task('jshint', function () {
  return gulp.src([config.scripts.files, '!' + config.views.templateCache])
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe($.plumber())
    .pipe($.jscs())
    .pipe($.plumber());
});
