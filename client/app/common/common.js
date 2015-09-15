import angular from 'angular';
import Services from './services/services';
import Components from './components/components';

const commonModule = angular.module('app.common', [
  Services.name,
  Components.name,
]);

export default commonModule;
