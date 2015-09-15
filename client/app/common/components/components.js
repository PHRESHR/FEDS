import angular from 'angular';
import Page from './page/page';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';

const componentsModule = angular.module('app.common.components', [
  Page.name,
  Navbar.name,
  Hero.name
]);

export default componentsModule;
