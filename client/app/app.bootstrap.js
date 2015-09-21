//  ----------------Core Deps---------------  //
import angular from 'angular';
import 'angular-animate';
import 'angular-sanitize';
import 'angular-ui-router';

//  ----------------App Files---------------  //
import './core/core';
import './layout/app';
// import './components/app/container/container';
// import './components/app/layout/layout';

import appModule from './app.module';

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
