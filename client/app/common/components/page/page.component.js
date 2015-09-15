import template from './page.html!text';
import controller from './page.controller';
import './page.css!';

const pageComponent = function(){
  return {
    template,
    controller,
    restrict: 'E',
    controllerAs: 'vm',
    scope: {},
    bindToController: true
  };
};

export default pageComponent;
