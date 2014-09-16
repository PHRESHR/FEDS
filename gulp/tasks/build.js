// 'use scrict';
//
// var gulp = require('gulp');
// var browserSync   = require('browser-sync');
// var config        = require('./config.json');
//
// // Build and serve the output from the dist build
// gulp.task('serve:dist', ['default'], function () {
//   'use strict';
//   browserSync({
//     notify: false,
//     // Run as an https by uncommenting 'https: true'
//     // Note: this uses an unsigned certificate which on first access
//     //       will present a certificate warning in the browser.
//     // https: true,
//     server: {
//       baseDir: [config.base.build]
//     }
//
//   });
// });

'use strict';

var gulp          = require('gulp');
var browserSync   = require('browser-sync');
var config        = require('./config.json');

gulp.task('build', ['default', 'setWatch'], function() {
  browserSync({
    notify: false,
    // Run as an https by uncommenting 'https: true'
    // Note: this uses an unsigned certificate which on first access
    //       will present a certificate warning in the browser.
    // https: true,
    server: {
      baseDir: [config.base.build]
    }
  });
});
