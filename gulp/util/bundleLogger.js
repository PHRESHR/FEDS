'use strict';
/* bundleLogger
   ------------
   Provides gulp style logs to the bundle method in browserify.js
*/

var $ = require('gulp-load-plugins')();
var prettyHrtime = require('pretty-hrtime');
var startTime;

module.exports = {
  start: function() {
    startTime = process.hrtime();
    $.util.log('Running', $.util.colors.green("'bundle'") + '...');
  },

  end: function() {
    var taskTime = process.hrtime(startTime);
    var prettyTime = prettyHrtime(taskTime);
    $.util.log('Finished', $.util.colors.green("'bundle'"), 'in', $.util.colors.magenta(prettyTime));
  }
};
