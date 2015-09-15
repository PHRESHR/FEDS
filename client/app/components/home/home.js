import angular from 'angular';
import 'angular-ui-router';
import homeComponent from './home.component';

const homeModule = angular.module('home', [
  'ui.router'
])
.config(($stateProvider, $urlRouterProvider)=> {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      template: '<home></home>',
      resolve: {
        // Constant Meta
        $title: () => 'Home',
        $description: () => 'My App description'
      }
    });
})
.directive('home', homeComponent);

export default homeModule;
