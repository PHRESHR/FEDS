import template from './toolbar.html!text';
import './toolbar.css!';
import {Component, View, Inject} from '../../core/decorators/decorators';

// start-non-standard
@Component({
  selector: 'toolbar'
})
@View({
  template: template
})
@Inject('$mdSidenav', '$log')
// end-non-standard

// Toolbar Controller
class Toolbar {
  constructor($mdSidenav, $log) {
    this.name = 'toolbar';
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

export default Toolbar;
