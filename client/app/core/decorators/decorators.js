import {pascalCaseToCamelCase, dashCaseToCamelCase} from '../utils/utils';

const appDecorators = angular.module('app.decorators', []);

function Run() {
  return function decorator(target, key, descriptor) {
    appDecorators.run(descriptor.value);
  };
}

function Config() {
  return function decorator(target, key, descriptor) {
    appDecorators.config(descriptor.value);
  };
}

function Service(options) {
  return function decorator(target) {
    options = options ? options : {};
    if (!options.serviceName) {
      throw new Error('@Service() must contains serviceName property!');
    }
    appDecorators.service(options.serviceName, target);
  };
}

function Filter(filter) {
  return function decorator(target, key, descriptor) {
    filter = filter ? filter : {};
    if (!filter.filterName) {
      throw new Error('@Filter() must contains filterName property!');
    }
    appDecorators.filter(filter.filterName, descriptor.value);
  };
}

function Inject(...dependencies) {
  return function decorator(target, key, descriptor) {
    // if it's true then we injecting dependencies into function and not Class constructor
    if (descriptor) {
      const fn = descriptor.value;
      fn.$inject = dependencies;
    } else {
      target.$inject = dependencies;
    }
  };
}

function Component(component) {
  return function decorator(target) {
    component = component ? component : {};
    if (!component.selector) {
      throw new Error('@Component() must contains selector property!');
    }
    if (target.$initView) {
      target.$initView(component.selector);
    }
    target.$isComponent = true;
  };
}

function View(view) {
  const options = view ? view : {};
  const defaults = {
    template: options.template,
    restrict: 'E',
    scope: {},
    bindToController: true,
    controllerAs: 'vm'
  };
  return function decorator(target) {
    if (target.$isComponent) {
      throw new Error('@View() must be placed after @Component()!');
    }
    target.$initView = (directiveName) => {
      directiveName = pascalCaseToCamelCase(directiveName);
      directiveName = dashCaseToCamelCase(directiveName);
      options.bindToController = options.bindToController || options.bind || {};
      appDecorators.directive(directiveName, () => {
        return Object.assign(defaults, {
          controller: target
        }, options);
      });
    };
    target.$isView = true;
  };
}

function Directive(options) {
  return function decorator(target) {
    const directiveName = dashCaseToCamelCase(options.selector);
    appDecorators.directive(directiveName, target.directiveFactory);
  };
}

function RouteConfig(stateName, options) {
  return function decorator(target) {
    appDecorators.config(['$stateProvider', ($stateProvider) => {
      $stateProvider.state(stateName, Object.assign({
        controller: target,
        controllerAs: 'vm'
      }, options));
    }]);
    appDecorators.controller(target.name, target);
  };
}

export default appDecorators;
export {Component, View, RouteConfig, Inject, Run, Config, Service, Filter, Directive};
