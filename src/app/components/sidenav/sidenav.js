import template from './sidenav.html!text';
import './sidenav.css!';
import {Component, View, Inject} from '../../core/decorators/decorators';

const INIT = new WeakMap();
const SERVICE = new WeakMap();
const LOG = new WeakMap();

// start-non-standard
@Component({
  selector: 'sidenav'
})
@View({
  template: template
})
@Inject('$mdSidenav', 'MenuService', '$log')
// end-non-standard

// Sidenav Controller
class Sidenav {
  constructor($mdSidenav, MenuService, $log) {
    SERVICE.set(this, MenuService);
    LOG.set(this, $log);
    INIT.set(this, () => {
      // LOG.get(this).log(SERVICE.get(this));
    });
    Object.assign(this, {
      $mdSidenav,
      name: 'sidenav',
      menu: SERVICE.get(this),
      openLeftMenu: () => $mdSidenav('left').toggle(),
      // navigation: [
      //   { state: 'docu-series', label: 'Docu-Series' },
      //   { state: 'radio-tv-film', label: 'Radio-TV-Film' },
      //   { state: 'music', label: 'Music' },
      //   { state: 'comedy', label: 'Comedy' },
      //   { state: 'lifestyle', label: 'Lifestyle' }
      // ],
      isOpen: (section) => {
        return SERVICE.get(this).isSectionSelected(section);
      },
      toggleOpen: (section) => {
        SERVICE.get(this).toggleSelectSection(section);
      }
    });

    INIT.get(this)();
  }

}

export default Sidenav;
