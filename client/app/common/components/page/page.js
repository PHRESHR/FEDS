import angular from 'angular';
import 'angular-ui-router';
import pageComponent from './page.component';

const pageModule = angular.module('page', [
  'ui.router'
])
.directive('page', pageComponent);

export default pageModule;
