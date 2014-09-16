'use scrict';

var gulp = require('gulp');
var del  = require('del');
var config        = require('./config.json');

// Clean Output Directory
gulp.task('clean', del.bind(null, [config.base.tmp, config.base.build, config.templateCache.base]));
