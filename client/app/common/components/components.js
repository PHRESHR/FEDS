import angular from 'angular';

import Navbar from './navbar/navbar';
import Hero from './hero/hero';

const componentsModule = angular.module('app.common.components', [
  Navbar.name,
  Hero.name
]);

export default componentsModule;
