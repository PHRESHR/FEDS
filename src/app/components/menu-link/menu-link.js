import template from './menu-link.html!text';
import {Directive, Inject} from '../../core/decorators/decorators';

// start-non-standard
@Directive({
  selector: 'menu-link'
})
@Inject('$log')
// end-non-standard

// Menu-toggle Controller
class MenuLink {
  constructor($log) {
    Object.assign(this, {
      $log,
      restrict: 'E',
      scope: {
        section: '='
      },
      name: 'Menu Toggle'
    });
  }
  template: template;
  link(scope, element) {
    const controller = element.parent().controller();
    scope.focusSection = () => {
      // set flag to be used later when
      // $locationChangeSuccess calls openPage()
      controller.autoFocusContent = true;
    };
  }
  // start-non-standard
  // @Inject('')
  // end-non-standard
  static directiveFactory() {
    MenuLink.instance = new MenuLink();
    return MenuLink.instance;
  }
}

export default MenuLink;
