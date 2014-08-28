(function () {
  'use strict';

  var controllersModule = require('./_index');

  /**
   * @ngInject
   */
  function AboutCtrl() {

    // ViewModel
    var vm = this;

    vm.title = 'About Page';
    vm.msg = 'I\'m a bad man';
    vm.number = 303014;

  }

  controllersModule.controller('AboutCtrl', AboutCtrl);
})();
