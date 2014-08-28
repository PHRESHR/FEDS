(function () {
  'use strict';

  /**
   * @ngInject
   */
  function Routes($stateProvider, $locationProvider, $urlRouterProvider) {

    //$locationProvider.html5Mode(true);

    $stateProvider
    .state('Home', {
      url: '/',
      controller: 'HomeCtrl as home',
      templateUrl: 'home.html',
      title: 'Home'
    })
    .state('About', {
      url: '/about',
      controller: 'AboutCtrl as about',
      templateUrl: 'about.html',
      title: 'About'
    });

    $urlRouterProvider.otherwise('/');

  }

  module.exports = Routes;
})();
