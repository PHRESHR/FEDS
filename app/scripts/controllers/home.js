(function () {
  'use strict';

  var controllersModule = require('./_index');

  /**
   * @ngInject
   */
  function HomeCtrl() {

    // ViewModel
    var vm = this;

    vm.title = 'Home Page';
    vm.msg = 'I\'m a bad mother...Shut yo mouth';
    vm.number = 60643;

  }

  controllersModule.controller('HomeCtrl', HomeCtrl);
})();
