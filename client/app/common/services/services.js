import angular from 'angular';
import Meta from './page-meta/page-meta';

const servicesModule = angular.module('app.common.services', [
  Meta.name
]);

export default servicesModule;
