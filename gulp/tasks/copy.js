'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('./config.json');


// Copy All Files At The Root Level (app)
gulp.task('copy-html', function () {
  return gulp.src([
    config.html.files
  ], {
    dot: true
  }).pipe(gulp.dest(config.base.build))
    .pipe($.size({title: 'copy html'}));
});
