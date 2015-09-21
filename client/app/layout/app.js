import '../components/toolbar/toolbar';
import '../components/home/home';
import '../components/about/about';
import template from './app.html!text';
import './app.css!';
import {RouteConfig, View, Component, Inject} from '../core/decorators/decorators';

// start-non-standard
@Component({
  selector: 'app'
})
@View({
  template: template
})
@Inject('$log')
// end-non-standard
class AppComponent {
  constructor($log) {
    $log.log('App Container');
  }
}

export default AppComponent;
