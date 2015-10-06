import template from './menu-toggle.html!text';
import {Directive, Inject} from '../../core/decorators/decorators';

// start-non-standard
@Directive({
  selector: 'menu-toggle'
})
@Inject('$timeout', '$log')
// end-non-standard

// Menu-toggle Controller
class MenuToggle {
  constructor($timeout, $log) {
    Object.assign(this, {
      $timeout,
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
    scope.isOpen = () => {
      return controller.isOpen(scope.section);
    };
    scope.toggle = () => {
      controller.toggleOpen(scope.section);
    };

    const parentNode = element[0].parentNode.parentNode.parentNode;
    if (parentNode.classList.contains('parent-list-item')) {
      const heading = parentNode.querySelector('h2');
      element[0].firstChild.setAttribute('aria-describedby', heading.id);
    }
  }
  // start-non-standard
  // @Inject('')
  // end-non-standard
  static directiveFactory() {
    MenuToggle.instance = new MenuToggle();
    return MenuToggle.instance;
  }
}

export default MenuToggle;
