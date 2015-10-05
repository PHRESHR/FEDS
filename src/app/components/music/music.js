import template from './music.html!text';
import './music.css!';
import {RouteConfig, Component, View, Inject} from '../../core/decorators/decorators';

// start-non-standard
@RouteConfig('music', {
  url: '/music',
  template: '<music></music>',
  resolve: {
    // Constant Meta
    $title: () => 'Music',
    $description: () => 'Music description'
  }
})
@Component({
  selector: 'music'
})
@View({
  template: template
})
@Inject('$log')
// end-non-standard

// Music Controller
class Music {
  constructor($log) {
    Object.assign(this, {
      $log,
      apiHost: '/api',
      name: 'music',
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

export default Music;
