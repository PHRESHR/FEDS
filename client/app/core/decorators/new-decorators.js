/**
 * Registry
 *
 *
 */
export const Registry = {
  // CONTROLLERS
  controllerList: [],
  addController(controller) {
    this.controllerList.push(controller);
  },
  registerController(controller, module) {
    const moduleName = controller.moduleName || module;
    const factoryController = controller.controller;
    const factory = controller.inject;
    factory.push(controller.controller);
    angular.module(moduleName).controller(controller.controllerName, factory);
  },
  // DIRECTIVES
  directiveList: [],
  addDirective(directive) {
    this.directiveList.push(directive);
  },
  registerDirective(directive, module) {
    const moduleName = directive.moduleName || module;
    const factoryDirective = directive.directive;
    let factory = new Array();
    factory = directive.inject;
    // create wrapper for directive object and inject dependencies
    const factoryFn = (...inject) => new factoryDirective(...inject);
    // add function wrapper to factory
    factory.push(factoryFn);
    // register directive
    angular.module(moduleName).directive(directive.selector, factory);
  },
  // REGISTER ALL
  register(defaultModuleName) {
    this.controllerList.forEach(this.registerController, defaultModuleName);
    this.directiveList.forEach(this.registerDirective, defaultModuleName);
  }
};

/**
 * Directive decorator
 */
export function Run(params) {
  return (target) => {
    Registry.addRun({
      moduleName: params.moduleName,
      selector: params.selector || target.name,
      directive: target,
      inject: params.inject
    });
  };
  // return function decorator(target, key, descriptor) {
  //   appModule.run(descriptor.value);
  // };
}

/**
 * Directive decorator
 */
export function Directive(params) {
  return (target) => {
    Registry.addDirective({
      moduleName: params.moduleName,
      selector: params.selector || target.name,
      directive: target,
      inject: params.inject
    });
  };
}

/**
 * Controller decorator
 */
export function Controller(params) {
  return (target) => {
    Registry.addController({
      moduleName: params.moduleName,
      controllerName: target.name,
      controller: target,
      inject: params.inject
    });
  };
}

/**
 * Bootstrap
 *
 * Bootstrap the angular app and register all decorated modules, controllers . . . .
 *
 * @param moduleName  string is required to register application parts missing module declaration
 *                           and bootstrap the angular app.
 * @param config      object
 * @param target      element where to bootstrap the app.
 */
 export function Bootstrap(moduleName, config, target) {
   const _target = target || document;
   const _modules = [moduleName];
   // register controllers, directives, filters, . . . .
   Registry.register(moduleName);
   // bootstrap angular app
   angular.element(target).ready(function() {
     angular.bootstrap(_target, _modules, config || {});
   });
 }
