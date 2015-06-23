import angular from 'angular';
import 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';

let appModule = angular.module('app', [
	'ui.router',
	Common.name,
	Components.name
])
.constant('AppSettings', {
  'appTitle': 'FEDS'
})
.config(($provide, $logProvider, $urlRouterProvider, $locationProvider, $httpProvider, $compileProvider, $rootScopeProvider) => {
	function exceptionHandlerDecorator($delegate, $log) {
    $delegate = function (excpetion, couse) {
      $log.log('caught you!');
    };
    return $delegate;
  }
  // use the HTML5 History API
  $locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});
  $provide.decorator('$exceptionHandler',exceptionHandlerDecorator);
	$httpProvider.useApplyAsync(true);
  $logProvider.debugEnabled(false);
  $compileProvider.debugInfoEnabled(false);
  $rootScopeProvider.digestTtl(8);
	return $urlRouterProvider.otherwise('/');
})
.run(($rootScope, $state, $stateParams, $location, AppSettings, $log) => {
	$rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;
  $rootScope.siteTitle = AppSettings.appTitle;
  //
  $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
    // $log.log('Change Started');
  });

  $rootScope.$on('$stateChangeError', function (event, next, previous, error) {
    // We can catch the error thrown when the $requireUser promise is rejected
    // and redirect the user back to the main page
    // console.log(event);
    // console.log(toState);
    // console.log(toParams);
    // console.log(fromState);
    // console.log(fromParams);
    console.log(error);
  });
})
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
