import template from './menu-toggle.html!text';
import './menu-toggle.css!';
import {Directive, Inject} from '../../core/decorators/decorators';

const TIMEOUT = new WeakMap();
const LOG = new WeakMap();

// start-non-standard
@Directive({
  selector: 'menu-toggle'
})
@Inject('$timeout', '$log')
// end-non-standard

// Menu-toggle Controller
class MenuToggle {
  constructor($timeout, $log) {
    this.restrict = 'E';
    this.scope = {
      section: '='
    };
    this.template = template;
    TIMEOUT.set(this, $timeout);
    LOG.set(this, $log);
  }
  link(scope, element) {
    scope.isOpen = () => {
    };
    scope.toggle = () => {
    };
  }
  // start-non-standard
  // @Inject('$log')
  // end-non-standard
  static directiveFactory() {
    MenuToggle.instance = new MenuToggle();
    return MenuToggle.instance;
  }
}

export default MenuToggle;
