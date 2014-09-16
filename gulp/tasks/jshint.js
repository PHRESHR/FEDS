'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync   = require('browser-sync');
var reload        = browserSync.reload;
var config = require('./config.json');

// Lint JavaScript
gulp.task('jshint', function () {
  return gulp.src([config.scripts.files])
    .pipe(reload({stream: true, once: true}))
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe($.if(!browserSync.active, $.jshint.reporter('fail')));
});
