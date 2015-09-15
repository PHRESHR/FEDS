import angular from 'angular';
import 'angular-ui-router';
import navbarComponent from './navbar.component';

const navbarModule = angular.module('navbar', [
  'ui.router'
])
.directive('navbar', navbarComponent);

export default navbarModule;
