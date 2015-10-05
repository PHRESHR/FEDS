import template from './comedy.html!text';
import './comedy.css!';
import {RouteConfig, Component, View, Inject} from '../../core/decorators/decorators';

// start-non-standard
@RouteConfig('comedy', {
  url: '/comedy',
  template: '<comedy></comedy>',
  resolve: {
    // Constant Meta
    $title: () => 'Comedy',
    $description: () => 'Comedy description'
  }
})
@Component({
  selector: 'comedy'
})
@View({
  template: template
})
@Inject('$log')
// end-non-standard

// Comedy Controller
class Comedy {
  constructor($log) {
    Object.assign(this, {
      $log,
      apiHost: '/api',
      name: 'comedy',
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

export default Comedy;
