'use strict';

/**
 * @ngdoc function
 * @name easyJobSearchApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the easyJobSearchApp
 */
angular.module('easyJobSearchApp')
  .controller('HomeCtrl', function () {
    var vm=this;

    vm.states = [
      {
        name: 'Andaman Nicobar',
        link: '#andmannicobar'
      },
      {
        name: 'Andhra Pradesh',
        link: '#andhrapradesh'
      },{
        name: 'Arunachal Pradesh',
        link: '#arunachalpradesh'
      },
      {
        name: 'Assam',
        link: '#assam'
      },
      {
        name: 'Bangalore',
        link: '#bangalore'
      },{
        name: 'Bihar',
        link: '#bihar'
      },
      {
        name: 'Chandigarh',
        link: '#chandigarh'
      },
      {
        name: 'Chennai',
        link: '#chennai'
      },
      {
        name: 'Chhattisgarh',
        link: '#chhattisgarh'
      },{
        name: 'Daman & Diu',
        link: '#daman&diu'
      },
      {
        name: 'Delhi NCR',
        link: '#delhincr'
      },
      {
        name: 'Goa',
        link: '#goa'
      },{
        name: 'Gujarat',
        link: '#gujarat'
      },
      {
        name: 'Haryana',
        link: '#haryana'
      },
      {
        name: 'Himachal Pradesh',
        link: '#himachalpradesh'
      },
      {
        name: 'Hyderabad',
        link: '#hyderabad'
      },{
        name: 'Jammu Kashmir',
        link: '#jammukashmir'
      },
      {
        name: 'Jharkhand',
        link: '#jharkhand'
      },
      {
        name: 'Karnataka',
        link: '#karnataka'
      },
      {
        name: 'Kerala',
        link: '#kerala'
      },{
        name: 'Kolkata',
        link: '#Kolkata'
      },
      {
        name: 'Lakshadweep',
        link: '#lakshadweep'
      },
      {
        name: 'Maharashtra',
        link: '#maharashtra'
      },
      {
        name: 'Manipur',
        link: '#manipur'
      },{
        name: 'Meghalaya',
        link: '#meghalaya'
      },
      {
        name: 'Mizoram',
        link: '#mizoram'
      },
      {
        name: 'Mumbai',
        link: '#mumbai'
      },
      {
        name: 'Nagaland',
        link: '#nagaland'
      },{
        name: 'Odisha',
        link: '#odisha'
      },
      {
        name: 'Puducherry',
        link: '#puducherry'
      },
      {
        name: 'Pune',
        link: '#pune'
      },
      {
        name: 'Punjab',
        link: '#punjab'
      },{
        name: 'Rajasthan',
        link: '#rajasthan'
      },
      {
        name: 'Sikkim',
        link: '#sikkim'
      },
      {
        name: 'Tamil Nadu',
        link: '#tamilnadu'
      },{
        name: 'Telangana',
        link: '#telangana'
      },
      {
        name: 'Tripura',
        link: '#tripura'
      },
      {
        name: 'Uttar Pradesh',
        link: '#uttarpradesh'
      },
      {
        name: 'Uttarakhand',
        link: '#uttarakhand'
      },{
        name: 'West Bengal',
        link: '#westbengal'
      },
    ];

    vm.getClass=function(index){
        index++;
        if(index%3===1){
          return 'btn btn-success';
        }else if(index%3===2){
          return 'btn btn-warning';
        }else if(index%3===0){
          return 'btn btn-danger';
        }
    };
  });
