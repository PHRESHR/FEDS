'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('./config.json');

// Optimize Images
gulp.task('images', function () {
  return gulp.src(config.images.files)
    .pipe($.cache($.imagemin({
      progressive: true,
      interlaced: true
    })))
    .pipe(gulp.dest(config.images.build))
    .pipe($.size({title: 'images'}));
});
