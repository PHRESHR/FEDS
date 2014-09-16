(function () {
  'use strict';

  require('angular');

  // angular modules
  require('angular-ui-router');
  require('angular-animate');
  require('angular-material');
  require('./.templates/templates');
  require('./controllers/_index');
  require('./services/_index');
  require('./directives/_index');

  // create and bootstrap application
  angular.element(document).ready(function() {

    var requires = [
      'ui.router',
      'ngAnimate',
      'ngMaterial',
      'templates',
      'app.controllers',
      'app.services',
      'app.directives'
    ];
    // Getter
    angular.module('app', requires);

    // Setter
    angular.module('app').constant('AppSettings', require('./constants'));
    angular.module('app').config(require('./routes'));
    angular.module('app').run(require('./on_run'));
    angular.bootstrap(document, ['app']);

  });
})();
