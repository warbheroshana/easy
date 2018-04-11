'use strict';

/**
 * @ngdoc function
 * @name easyJobSearchApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the easyJobSearchApp
 */
angular.module('easyJobSearchApp')
  .controller('HeaderCtrl', ['rest', function (rest) {
    var vm = this;
    rest.menu.get({
      id: 1
    }, function (data) {
      vm.menuBar = data;
    }, function (error) {
      console.log('Error', error);
    });
  }]);
