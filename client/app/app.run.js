function OnRun($rootScope, $state, $stateParams, $location, AppSettings, $log) {
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
}

export default OnRun;
