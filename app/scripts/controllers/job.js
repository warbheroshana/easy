'use strict';

/**
 * @ngdoc function
 * @name easyJobSearchApp.controller:MainCtrl
 * @description
 *  MainCtrl
 * Controller of the easyJobSearchApp
 */
angular.module('easyJobSearchApp')
  .controller('JobCtrl', ['rest', '$stateParams', '$location', '$anchorScroll', function (rest, $stateParams, $location, $anchorScroll) {
    var vm = this;
    var categoryId = $stateParams.categoryId;
    rest.category.get({
        'categoryId': categoryId
      },
      function (data) { 
        vm.category = data;
      },
      function (error) {
        window.alert('error', error);
      }
    );
  }]);
