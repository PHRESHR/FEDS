'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('./config.json');

gulp.task('bundle:templates', function () {
  return gulp.src(config.views.files)
    // .pipe($.htmlmin({
    //   collapseWhitespace: true,
    //   conservativeCollapse: true
    // }))
    .pipe($.angularTemplatecache('templates.js', {
      standalone: true
    }))
    .pipe(gulp.dest(config.views.build));
});
