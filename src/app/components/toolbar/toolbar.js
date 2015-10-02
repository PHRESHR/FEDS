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
@Inject('$timeout', '$mdSidenav', '$mdUtil', '$log')
// end-non-standard

// Toolbar Controller
class Toolbar {
  constructor($timeout, $mdSidenav, $mdUtil, $log) {
    Object.assign(this, {
      $timeout,
      $mdSidenav,
      $mdUtil,
      $log,
      name: 'toolbar',
      activated: false
    });
    // On load
    this.activate();
  }

  /**
   * Handles on load processing, and loading initial data
 */
  activate() {
    const buildToggler = (navID) => {
      navID = navID || 'left';
      const debounceFn = this.$mdUtil.debounce(() => {
        this.$mdSidenav(navID)
          .toggle()
          .then(() => {
            this.$log.log('Sidenav toggle(' + navID + ') initialized');
          });
      }, 200);
      return debounceFn;
    };
    this.openLeftMenu = buildToggler('left');

    this.activated = true;
  }
}

export default Toolbar;
