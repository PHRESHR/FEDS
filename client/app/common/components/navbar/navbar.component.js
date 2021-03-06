import template from './navbar.html!text';
import controller from './navbar.controller';
import './navbar.css!';

const navbarComponent = function(){
  return {
    template,
    controller,
    restrict: 'E',
    controllerAs: 'vm',
    scope: {},
    bindToController: true
  };
};

export default navbarComponent;
