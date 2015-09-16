import template from './sidenav.html!text';
import './sidenav.css!';
import {Component, View, Inject} from '../../core/decorators/decorators';

// start-non-standard
@Component({
  selector: 'sidenav'
})
@View({
  template: template
})
@Inject('$mdSidenav', '$log')
// end-non-standard

// Sidenav Controller
class Sidenav {
  constructor($mdSidenav, $log) {
    this.name = 'sidenav';
    this.openLeftMenu = () => $mdSidenav('left').toggle();
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

export default Sidenav;
