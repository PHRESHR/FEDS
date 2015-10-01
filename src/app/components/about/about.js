import template from './about.html!text';
import {RouteConfig, Component, View, Inject} from '../../core/decorators/decorators';

// start-non-standard
@RouteConfig('about', {
  url: '/about',
  template: '<about></about>',
  resolve: {
    // Constant Meta
    $title: () => 'About',
    $description: () => 'About description'
  }
})
@Component({
  selector: 'about'
})
@View({
  template: template
})
@Inject('$scope', '$http', '$log')
// end-non-standard

// About Controller
class About {
  constructor($scope, $http, $log) {
    this.$http = $http;
    this.$log = $log;
    this.items = [];
    this.abouttext = [];
    this.name = 'about';
    this.activated = false;
    // On load
    this.activate();
  }

  /**
   * Handles on load processing, and loading initial data
 */
  activate() {
    this.$http.get('/api/items').success((items) => {
      this.items = items;
      this.$log.log(items);
    });
    this.$http.get('/api/abouttext').success((text) => {
      this.abouttext = text;
      this.$log.log(text);
    });
    this.activated = true;
  }
}

export default About;
