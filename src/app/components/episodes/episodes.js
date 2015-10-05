import template from './episodes.html!text';
import './episodes.css!';
import {RouteConfig, Component, View, Inject} from '../../core/decorators/decorators';

// start-non-standard
@RouteConfig('episodes', {
  url: '/episodes',
  template: '<episodes></episodes>',
  resolve: {
    // Constant Meta
    $title: () => 'Episodes',
    $description: () => 'Episodes description'
  }
})
@Component({
  selector: 'episodes'
})
@View({
  template: template
})
@Inject('$log')
// end-non-standard

// Episodes Controller
class Episodes {
  constructor($log) {
    Object.assign(this, {
      $log,
      apiHost: '/api',
      name: 'episodes',
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

export default Episodes;
