//  ----------------Core Deps---------------  //
import angular from 'angular';
import {Component, View, RouteConfig, Inject, Run, Config, Service, Filter, Directive} from './core/decorators/decorators';

const appModule = angular.module('app', [
  'ngSanitize',
  'ngMaterial',
  'ui.router',
  'rx',
  // Decorators.name
]);

export default appModule;
