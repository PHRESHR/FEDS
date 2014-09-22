'use strict';

var gulp = require('gulp');
var wiredep = require('wiredep').stream;
var config = require('./config.json');

gulp.task('wiredep', function () {
  gulp.src(config.styles.files)
    .pipe(wiredep())
    .pipe(gulp.dest(config.styles.base));

  gulp.src(config.html.files)
    .pipe(wiredep({
      exclude: []
    }))
    .pipe(gulp.dest(config.base.app));
});
