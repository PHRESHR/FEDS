'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('serve', function () {
  runSequence(
    ['scripts', 'styles', 'watch'],
    'server:dev'
  );
});

gulp.task('serve:dist', function () {
  runSequence(
    'clean',
    'setDist',
    ['scripts:dist', 'styles', 'assets'],
    'compile',
    'server:dist'
  );
});
