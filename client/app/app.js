//  ----------------Core Deps---------------  //
import angular from 'angular';
import Decorators from './core/decorators/decorators';

const appModule = angular.module('app', [
  'ngSanitize',
  'ngMaterial',
  'ui.router',
  'rx',
  Decorators.name
]);

export default appModule;
