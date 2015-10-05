import template from './docu-series.html!text';
import './docu-series.css!';
import {RouteConfig, Component, View, Inject} from '../../core/decorators/decorators';

// start-non-standard
@RouteConfig('docu-series', {
  url: '/docu-series',
  template: '<docu-series></docu-series>',
  resolve: {
    // Constant Meta
    $title: () => 'Docu-series',
    $description: () => 'Docu-series description'
  }
})
@Component({
  selector: 'docu-series'
})
@View({
  template: template
})
@Inject('$log')
// end-non-standard

// DocuSeries Controller
class DocuSeries {
  constructor($log) {
    Object.assign(this, {
      $log,
      apiHost: '/api',
      name: 'docu-series',
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

export default DocuSeries;
