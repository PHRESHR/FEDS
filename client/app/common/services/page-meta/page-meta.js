import angular from 'angular';
import PageMetaFactory from './page-meta.factory';

const pageMetaModule = angular.module('pageMeta', [])
  .factory('PageMeta', PageMetaFactory);

export default pageMetaModule;
