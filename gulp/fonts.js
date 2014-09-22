'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var bowerFiles = require('main-bower-files');
var config = require('./config.json');

gulp.task('fonts', function () {
  return gulp.src(bowerFiles().concat(config.fonts.base + '/**/*'))
    .pipe($.filter('**/*.{eot,svg,ttf,woff}'))
    .pipe($.flatten())
    .pipe(gulp.dest(config.fonts.build));
});
