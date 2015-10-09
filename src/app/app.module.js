//  ----------------Core Deps---------------  //
import angular from 'angular';

const appModule = angular.module('app', [
  'ngSanitize',
  'ngAnimate',
  'ngMaterial',
  'ui.router',
  'angulartics',
  'angulartics.google.analytics',
  'com.2fdevs.videogular',
  'com.2fdevs.videogular.plugins.buffering',
  'com.2fdevs.videogular.plugins.controls',
  'com.2fdevs.videogular.plugins.overlayplay',
  'com.2fdevs.videogular.plugins.poster',
  'com.2fdevs.videogular.plugins.analytics',
  'info.vietnamcode.nampnq.videogular.plugins.youtube',
  'rx'
]);

export default appModule;
