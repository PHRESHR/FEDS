import { AppSettings } from '../constants/constants';
import { getTitleValue, getDescriptionValue, getMetaImgValue, getUrlValue } from '../utils/utils';
import {Run, Inject} from '../decorators/decorators';

class OnRun {
  @Run()
  @Inject('$rootScope', '$state', '$stateParams', '$location', '$log')
  static runFactory($rootScope, $state, $stateParams, $location, $log) {
    $rootScope.$state = $state;

    const stateChangeSuccess = $rootScope.$on('$stateChangeSuccess', (event, toState) => {
      $rootScope.pageTitle = '';
      $rootScope.pageDesc = '';

      // if (toState.resolve.$title()) {
      //   $rootScope.pageTitle += toState.resolve.$title();
      //   $rootScope.pageTitle += ' \u2014 ';
      // }

      $rootScope.pageTitle = AppSettings.appTitle;
      $rootScope.pageDescription = AppSettings.appDescription;

      const title = getTitleValue($state.$current.locals.globals.$title);
      const description = getDescriptionValue($state.$current.locals.globals.$description);
      const metaImg = getMetaImgValue($state.$current.locals.globals.$metaImg);
      const url = getUrlValue($state.$current.locals.globals.$url);

      $rootScope.$title = title || $rootScope.pageTitle;
      $rootScope.$description = description || $rootScope.pageDescription;
      $rootScope.$metaImg = metaImg;
      $rootScope.$url = url;

      $log.log('Current Location: ' + $rootScope.$title);

    });

    const stateChangeStart = $rootScope.$on('$stateChangeStart', (event, toState, toParams, fromState, fromParams) => {
      $log.log('Change Started:', new Date());
      $log.log(fromState);
    });

    const stateChangeError = $rootScope.$on('$stateChangeError', (event, next, previous, error) => {
      event.preventDefault();
      $log.error(error.stack);
      $state.go('500');
      $log.log(error);
    });

    const unbind = [
      stateChangeSuccess,
      stateChangeStart,
      stateChangeError
    ];

    // $rootScope.$on('$destroy', () => {
    //   unbind.forEach((fn) => {
    //     fn();
    //   });
    // });
  }
}

export default OnRun;
