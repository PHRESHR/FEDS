import template from './lifestyle.html!text';
import './lifestyle.css!';
import {RouteConfig, Component, View, Inject} from '../../core/decorators/decorators';

// start-non-standard
@RouteConfig('lifestyle', {
  url: '/lifestyle',
  template: '<lifestyle></lifestyle>',
  resolve: {
    // Constant Meta
    $title: () => 'Lifestyle',
    $description: () => 'Lifestyle description'
  }
})
@Component({
  selector: 'lifestyle'
})
@View({
  template: template
})
@Inject('$log')
// end-non-standard

// Lifestyle Controller
class Lifestyle {
  constructor($log) {
    Object.assign(this, {
      $log,
      apiHost: '/api',
      name: 'lifestyle',
      activated: false
    });
    // On load
    this.activate();
  }

  /**
   * Handles on load processing, and loading initial data
 */
  activate() {

    this.activated = true;
  }
}

export default Lifestyle;
