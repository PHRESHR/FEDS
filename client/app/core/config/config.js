import {Config, Inject} from '../decorators/decorators';
class OnConfig {
  @Config()
  @Inject('$provide', '$urlRouterProvider', '$locationProvider', '$httpProvider', '$compileProvider', '$rootScopeProvider', '$logProvider')
  static configFactory($provide, $urlRouterProvider, $locationProvider, $httpProvider, $compileProvider, $rootScopeProvider, $logProvider) {
    function exceptionHandlerDecorator($delegate, $log) {
      $delegate = (excepetion, cause) => $log.error('caused by ' + cause);

      return $delegate;
    }
    $provide.decorator('$exceptionHandler', exceptionHandlerDecorator);
    $httpProvider.useApplyAsync(true);
    $logProvider.debugEnabled(false);
    $compileProvider.debugInfoEnabled(false);
    $rootScopeProvider.digestTtl(8);

    // use the HTML5 History API
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
    return $urlRouterProvider.otherwise('/');
  }
}

export default OnConfig;
