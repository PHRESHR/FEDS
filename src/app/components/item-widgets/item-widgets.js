import template from './item-widgets.html!text';
import './item-widgets.css!';
import {RouteConfig, Component, View, Inject} from '../../core/decorators/decorators';

// start-non-standard
@Component({
  selector: 'item-widgets'
})
@View({
  template: template
})
@Inject('$log')
// end-non-standard

// Item-widgets Controller
class ItemWidgets {
  constructor($log) {
    Object.assign(this, {
      $log,
      name: 'item-widgets',
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

export default ItemWidgets;
