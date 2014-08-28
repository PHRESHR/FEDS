(function () {
  'use strict';

  require('angular');

  module.exports = angular.module('app.controllers', []);

  // Define the list of controllers here
  require('./example.js');
  require('./home.js');
  require('./about.js');
})();
