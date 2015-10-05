import template from './videoview.html!text';
import './videoview.css!';
import {RouteConfig, Component, View, Inject} from '../../core/decorators/decorators';

// start-non-standard
@RouteConfig('app.videoview', {
  url: '/',
  template: '<videoview></videoview>',
  resolve: {
    // Constant Meta
    $title: () => 'Videoview',
    $description: () => 'Videoview description'
  }
})
@Component({
  selector: 'videoview'
})
@View({
  template: template
})
@Inject('$log')
// end-non-standard

// Videoview Controller
class Videoview {
  constructor($log) {
    Object.assign(this, {
      $log,
      apiHost: '/api',
      name: 'videoview',
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

export default Videoview;
