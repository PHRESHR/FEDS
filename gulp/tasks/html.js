'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('./config.json');

// Scan Your HTML For Assets & Optimize Them
gulp.task('html', function () {
  // var assets = $.useref.assets({searchPath: '{.tmp,app,dist}'});

  return gulp.src(config.html.files)
    // .pipe(assets)
    // // Concatenate And Minify JavaScript
    // .pipe($.if('*.js', $.uglify({preserveComments: 'some'})))
    // // Concatenate And Minify Styles
    // .pipe($.if('*.css', $.csso()))
    // .pipe(assets.restore())
    // .pipe($.useref())
    // Output Files
    .pipe(gulp.dest(config.base.build))
    .pipe($.size({title: 'html'}));
});
