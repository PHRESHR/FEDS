'use strict';

var gulp = require('gulp');
var config = require('./config.json');

gulp.task('watch', function () {
  gulp.watch(config.styles.files, ['sass']);
  gulp.watch(config.scripts.files, ['jshint']);
  gulp.watch(config.views.files, ['bundle:templates']);
  gulp.watch('bower.json', ['wiredep']);
});
