'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var handleErrors = require('../util/handleErrors');
var config = require('./config.json');

// Compile and Automatically Prefix Stylesheets
gulp.task('styles', ['images'], function() {

  return gulp.src([
        config.styles.files
    ])
    .pipe($.changed(config.styles.tmp, {extension: '.css'}))
    .pipe($.if('*.scss', $.rubySass(config.styles.SassOptions)
    .on('error', console.error.bind(console))
    ))
    .on('error', handleErrors)
    .pipe($.autoprefixer(config.styles.AUTOPREFIXER_BROWSERS))
    .pipe(gulp.dest(global.isDist ? config.styles.build : config.styles.tmp))
    // Concatenate And Minify Styles
    // .pipe($.if('*.css', $.csso()))
    // .pipe($.streamify($.rename({suffix: '.min'})))
    // .pipe(gulp.dest(dist ? config.styles.build : config.styles.tmp))
    .pipe($.size({title: 'styles'}));

});
