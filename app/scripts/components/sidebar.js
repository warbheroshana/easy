'use strict';

/**
 * @ngdoc function
 * @name easyJobSearchApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the easyJobSearchApp
 */
angular.module('easyJobSearchApp')
    .controller('SideBarCtrl', ['rest', function (rest) {
        var vm = this;
        vm.list = [];
        rest.sidebar.get(
            { id: vm.sidebar },
            function (data) {
                vm.list.push(data);
            }, function (error) {
                console.log('Error',error);
            }
        );
    }]).component('sideBar', {
        templateUrl: 'views/sidebar.html',
        controller: 'SideBarCtrl',
        bindings: {
            hero: '='
        }
    }); 
