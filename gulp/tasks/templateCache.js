'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('./config.json');

// Angular template cache task
gulp.task('templateCache', function() {

  // Process any other view files from app/views
  return gulp.src(config.views.files)
    .pipe($.angularTemplatecache({
      standalone: true
  }))
    .pipe(gulp.dest(config.views.build))
    .pipe($.size({title: 'Angular templateCache'}));
});
