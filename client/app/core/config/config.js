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
    $mdThemingProvider.definePalette('brand-red', {
      '50': '#f9ebea',
      '100': '#ecc4bf',
      '200': '#e09c95',
      '300': '#d57b72',
      '400': '#ca5a4e',
      '500': '#c0392b',
      '600': '#a83226',
      '700': '#902b20',
      '800': '#78241b',
      '900': '#601d16',
      'A100': '#ecc4bf',
      'A200': '#e09c95',
      'A400': '#ca5a4e',
      'A700': '#902b20'
    });

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
      '900': '#111111',
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
