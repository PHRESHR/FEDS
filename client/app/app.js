import angular from 'angular';
import 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import Config from './app.config';
import OnRun from './app.run';

let appModule = angular.module('app', [
	'ui.router',
	Common.name,
	Components.name
])
.constant('AppSettings', {
  'appTitle': 'FEDS'
})
.config(Config)
.run(OnRun)
.directive('app', AppComponent);

/*
 * As we are using ES6 with Angular 1.x we can't use ng-app directive
 * to bootstrap the application as modules are loaded asynchronously.
 * Instead, we need to bootstrap the application manually
 */

angular.element(document).ready(()=> {
  angular.bootstrap(document, [appModule.name]), {
    strictDi: true
  };
});

export default appModule;
