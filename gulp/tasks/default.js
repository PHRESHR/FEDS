'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

// Build Production Files, the Default Task
gulp.task('default', ['clean'], function (cb) {
  runSequence('styles', 'templateCache', 'browserify', ['jshint', 'html', 'images', 'fonts', 'copy-html', 'copy-styles', 'copy-scripts'], cb);
});
