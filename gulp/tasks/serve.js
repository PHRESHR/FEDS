'use strict';
/* Notes:
   - gulp/tasks/browserify.js handles js recompiling with watchify
   - gulp/tasks/browserSync.js watches and reloads compiled files
*/

var gulp          = require('gulp');
var browserSync   = require('browser-sync');
var reload        = browserSync.reload;
var config        = require('./config.json');

gulp.task('serve', ['styles', 'templateCache', 'browserify', 'setWatch'], function() {
  browserSync({
    notify: false,
    // Run as an https by uncommenting 'https: true'
    // Note: this uses an unsigned certificate which on first access
    //       will present a certificate warning in the browser.
    // https: true,
    server: {
      baseDir: [config.base.tmp, config.base.app]
    }
  });

  gulp.watch([config.html.files, config.views.files], ['templateCache', 'html', reload]);
  gulp.watch([config.styles.files], ['styles', reload]);
  gulp.watch([config.scripts.files], ['jshint', 'browserify', reload]);
  gulp.watch([config.images.files], reload);
});
