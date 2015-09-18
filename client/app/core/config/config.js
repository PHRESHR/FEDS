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
    $mdThemingProvider.definePalette('brand-red', $mdThemingProvider.extendPalette('red', {
      'A100': '#DE3641'
    }));

    $mdThemingProvider.definePalette('brand-grey', $mdThemingProvider.extendPalette('grey', {
      '50': '#E9E9E9',
      '100': '#BCBCBC',
      '200': '#909090',
      '300': '#6B6B6B',
      '400': '#464646',
      '500': '#212121',
      '600': '#1D1D1D',
      '700': '#191919',
      '800': '#151515',
      '900': '#1a1a1a',
      'contrastDefaultColor': 'light',
      'contrastDarkColors': '50 100 200 A100',
      'contrastStrongLightColors': '300 400 A200 A400'
    }));

    $mdThemingProvider.theme('default')
      .primaryPalette('brand-grey')
      .accentPalette('brand-red')
      .backgroundPalette('brand-grey', { 'default': '900' })
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
