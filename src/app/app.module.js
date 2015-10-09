//  ----------------Core Deps---------------  //
import angular from 'angular';

const appModule = angular.module('app', [
  'ngSanitize',
  'ngAnimate',
  'ngMaterial',
  'ui.router',
  'rx'
]);

export default appModule;
