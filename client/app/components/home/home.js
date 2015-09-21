import template from './home.html!text';
import './home.css!';
import {RouteConfig, Component, View, Inject} from '../../core/decorators/decorators';

// start-non-standard
@RouteConfig('home', {
  url: '/',
  template: '<home></home>',
  resolve: {
    // Constant Meta
    $title: () => 'Home',
    $description: () => 'My App description'
  }
})
@Component({
  selector: 'home'
})
@View({
  template: template
})
@Inject('TestService', '$log')
// end-non-standard

// Home Controller
class Home {
  constructor(TestService, $log) {
    this.$log = $log;
    this.TestService = TestService;
    this.name = 'home';
    this.activated = false;

    // On load
    this.activate();
  }

  /**
   * Handles on load processing, and loading initial data
 */
  activate() {
    const test = this.TestService.getService();
    this.$log.log(test);
    this.activated = true;
  }
}

export default Home;
