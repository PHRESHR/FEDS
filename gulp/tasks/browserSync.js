'use strict';

var browserSync = require('browser-sync');
var gulp        = require('gulp');
var config        = require('./config.json');

gulp.task('browserSync', ['build'], function() {
  browserSync({
    server: {
      // src is included for use with sass source maps
      baseDir: [config.base.tmp, config.base.app]
    },
    files: [
      // Watch everything in build
      config.base.build + '/**',
      // Exclude sourcemap files
      '!' + config.base.build + '/**/*.map'
    ]
  });
});
