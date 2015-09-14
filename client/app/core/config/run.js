import { AppSettings } from '../constants/constants';
class OnRun {
  // @ngInject
  static runFactory($rootScope, $state, $stateParams, $location, $log) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    $rootScope.siteTitle = AppSettings.appTitle;
    $log.log($rootScope.siteTitle);

    const stateChangeStart = $rootScope.$on('$stateChangeStart', (event, toState, toParams, fromState, fromParams) => {
      $log.log('Change Started');
    });

    const stateChangeError = $rootScope.$on('$stateChangeError', (event, next, previous, error) => {
      event.preventDefault();
      $log.error(error.stack);
      $state.go('500');
      $log.log(error);
    });
  }
}

export default OnRun;
