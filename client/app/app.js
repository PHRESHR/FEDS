//  ----------------Core Deps---------------  //
import angular from 'angular';
import 'angular-animate';
import 'angular-sanitize';
import 'angular-material';
import 'angular-ui-router';
import 'rx-angular';

//  ----------------App Deps---------------  //
import OnConfig from './core/config/config';
import OnRun from './core/config/run';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import 'normalize.css';

const appModule = angular.module('app', [
  'ngSanitize',
  'ngMaterial',
  'ui.router',
  'rx',
  Common.name,
  Components.name
])
.config(OnConfig.configFactory)
.run(OnRun.runFactory)
.directive('app', AppComponent);

/*
 * As we are using ES6 with Angular 1.x we can't use ng-app directive
 * to bootstrap the application as modules are loaded asynchronously.
 * Instead, we need to bootstrap the application manually
 */

angular.element(document).ready(()=> {
  angular.bootstrap(document, [ appModule.name ]), {
    strictDi: true
  };
});

export default appModule;
