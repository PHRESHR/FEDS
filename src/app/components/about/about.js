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
    Object.assign(this, {
      $scope,
      $http,
      $log,
      apiHost: '/api',
      name: 'about',
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

export default About;
