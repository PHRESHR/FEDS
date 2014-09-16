'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('./config.json');

// Copy Web Fonts To Dist
gulp.task('fonts', function () {
  return gulp.src([config.fonts.files])
    .pipe(gulp.dest(config.fonts.build))
    .pipe($.size({title: 'fonts'}));
});
