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
    Object.assign(this, {
      $mdSidenav,
      $log,
      name: 'sidenav',
      openLeftMenu: () => $mdSidenav('left').toggle(),
      navigation: [
        { state: 'docu-series', label: 'Docu-Series' },
        { state: 'radio-tv-film', label: 'Radio-TV-Film' },
        { state: 'music', label: 'Music' },
        { state: 'comedy', label: 'Comedy' },
        { state: 'lifestyle', label: 'Lifestyle' }
      ],
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

export default Sidenav;
