import {Config, Inject} from '../decorators/decorators';
class OnConfig {
  @Config()
  @Inject('$provide', '$urlRouterProvider', '$locationProvider', '$httpProvider', '$compileProvider', '$rootScopeProvider', '$logProvider', '$mdThemingProvider')
  static configFactory($provide, $urlRouterProvider, $locationProvider, $httpProvider, $compileProvider, $rootScopeProvider, $logProvider, $mdThemingProvider) {
    function exceptionHandlerDecorator($delegate, $log) {
      $delegate = (excepetion, cause) => $log.error('caused by ' + cause);

      return $delegate;
    }
    $provide.decorator('$exceptionHandler', exceptionHandlerDecorator);
    $httpProvider.useApplyAsync(true);
    $logProvider.debugEnabled(false);
    $compileProvider.debugInfoEnabled(false);
    $rootScopeProvider.digestTtl(8);

    // Angular Material theme config
    $mdThemingProvider.definePalette('brand-blue', $mdThemingProvider.extendPalette(
      'blue', {
        '50': '#DCEFFF',
        '100': '#AAD1F9',
        '200': '#7BB8F5',
        '300': '#4C9EF1',
        '400': '#1C85ED',
        '500': '#106CC8', // Main Color
        '600': '#0159A2',
        '700': '#025EE9',
        '800': '#014AB6',
        '900': '#013583',
        'contrastDefaultColor': 'light',
        'contrastDarkColors': '50 100 200 A100',
        'contrastStrongLightColors': '300 400 A200 A400'
      }));

    $mdThemingProvider.definePalette('brand-red', $mdThemingProvider.extendPalette('red', {
      'A100': '#DE3641'
    }));

    $mdThemingProvider.theme('default')
      .primaryPalette('brand-blue')
      .accentPalette('brand-red')
      .dark();

    // use the HTML5 History API
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
    return $urlRouterProvider.otherwise('/');
  }
}

export default OnConfig;
