'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('./config.json');

gulp.task('sass', function () {
  return gulp.src(config.styles.files)
    .pipe($.plumber())
    .pipe($.rubySass(config.styles.SassOptions))
    .pipe($.autoprefixer(config.styles.AUTOPREFIXER_BROWSERS))
    .pipe(gulp.dest(global.isDist ? config.styles.build : config.styles.tmp));
});
