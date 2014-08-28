(function () {
  'use strict';

  var controllersModule = require('./_index');

  /**
   * @ngInject
   */
  function ExampleCtrl() {

    // ViewModel
    var vm = this;

    vm.title = 'Test Page';
    vm.msg = 'I\'m a bad man';
    vm.number = 60643;

  }

  controllersModule.controller('ExampleCtrl', ExampleCtrl);
})();
