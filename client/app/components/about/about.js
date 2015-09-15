import angular from 'angular';
import 'angular-ui-router';
import aboutComponent from './about.component';

const aboutModule = angular.module('about', [
  'ui.router'
])
.config(($stateProvider)=> {
  $stateProvider
    .state('about', {
      url: '/about',
      template: '<about></about>',
      resolve: {
        // Constant Meta
        $title: () => 'About',
        $description: () => 'My About description'
      }
    });
})
.directive('about', aboutComponent);

export default aboutModule;
