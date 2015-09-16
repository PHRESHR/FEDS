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
@Inject('$log')
// end-non-standard

// Toolbar Controller
class Toolbar {
  constructor($log) {
    this.name = 'toolbar';
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
