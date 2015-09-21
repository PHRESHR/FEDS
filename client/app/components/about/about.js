import template from './about.html!text';
import './about.css!';
import {RouteConfig, Component, View, Inject} from '../../core/decorators/decorators';

// start-non-standard
@RouteConfig('about', {
  url: '/about',
  template: '<about></about>',
  resolve: {
    // Constant Meta
    $title: () => 'About',
    $description: () => 'My App description'
  }
})
@Component({
  selector: 'about'
})
@View({
  template: template
})
@Inject('$log')
// end-non-standard

// About Controller
class About {
  constructor() {
    this.name = 'about';
    this.activated = false;
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

export default About;
