import angular from 'angular';
import Home from './home/home';
import About from './about/about';

const componentModule = angular.module('app.components', [
  Home.name,
  About.name
]);

export default componentModule;
