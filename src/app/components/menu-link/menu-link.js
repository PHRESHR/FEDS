import template from './menu-link.html!text';
import './menu-link.css!';
import {Directive, Inject} from '../../core/decorators/decorators';

const LOG = new WeakMap();

// start-non-standard
@Directive({
  selector: 'menu-link'
})
@Inject('$log')
// end-non-standard

// Menu-toggle Controller
class MenuLink {
  constructor($log) {
    this.restrict = 'E';
    this.scope = {
      section: '='
    };
    this.template = template;
    LOG.set(this, $log);
  }
  template: template;
  link(scope, element) {}
  // start-non-standard
  // @Inject('')
  // end-non-standard
  static directiveFactory() {
    MenuLink.instance = new MenuLink();
    return MenuLink.instance;
  }
}

export default MenuLink;
