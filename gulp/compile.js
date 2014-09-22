'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('./config.json');

gulp.task('compile', function () {
  var assets = $.useref.assets({searchPath: '{.tmp,dist}'});
  var jsFilter = $.filter('**/*.js');
  var cssFilter = $.filter('**/*.css');

  return gulp.src(config.html.files)
    .pipe(assets)
    // .pipe($.rev())

    // process js
    .pipe(jsFilter)
    .pipe($.ngAnnotate())
    .pipe($.uglify())
    .pipe(jsFilter.restore())

    // process css
    .pipe(cssFilter)
    // //.pipe($.replace('../../bower_components/bootstrap-sass-official/assets/fonts/bootstrap', '../assets/fonts'))
    .pipe($.csso())
    .pipe(cssFilter.restore())

    .pipe(assets.restore())
    .pipe($.useref())
    // .pipe($.revReplace())

    .pipe(gulp.dest(config.base.build));
});
