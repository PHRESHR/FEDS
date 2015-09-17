import '../../sidenav/sidenav';
import '../../toolbar/toolbar';
import '../../home/home';
import '../../about/about';
import template from './layout.html!text';
import {RouteConfig, View, Component} from '../../../core/decorators/decorators';

// start-non-standard
@RouteConfig('app', {
  url: '',
  abstract: true,
  template: template
})
// end-non-standard
class AppLayout {
  constructor($log) {
    $log.log('App Layout');
  }
}

export default AppLayout;
