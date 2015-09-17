import '../../home/home';
// import '../about/about';
import template from './container.html!text';
import {RouteConfig, View, Component, Inject} from '../../../core/decorators/decorators';

// start-non-standard
@Component({
  selector: 'app'
})
@View({
  template: template
})
@Inject('$log')
// end-non-standard
class AppContainer {
  constructor($log) {
    $log.log('App Container');
  }
}

export default AppContainer;
