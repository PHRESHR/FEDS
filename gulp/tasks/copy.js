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

gulp.task('copy-styles', function () {
  return gulp.src([
    config.styles.tmp + '/*.{css,scss,sass}'
  ], {
    base: config.styles.tmp
  }).pipe(gulp.dest(config.styles.build))
    .pipe($.size({title: 'copy styles'}));
});

gulp.task('copy-scripts', function () {
  return gulp.src([
    config.scripts.tmp + '/*.{js,coffee}'
  ], {
    base: config.scripts.tmp
  }).pipe(gulp.dest(config.scripts.build))
    .pipe($.size({title: 'copy scripts'}));
});
