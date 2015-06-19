function Config($provide, $logProvider, $urlRouterProvider, $locationProvider, $httpProvider, $compileProvider, $rootScopeProvider) {
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
}

// Config.$inject = ['$stateProvider', '$urlRouterProvider'];
export default Config;
