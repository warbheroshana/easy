'use strict';

/**
 * @ngdoc function
 * @name easyJobSearchApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the easyJobSearchApp
 */
angular.module('easyJobSearchApp')
  .controller('HomeSideBarCtrl', function () {
    var vm = this;

    vm.list = [
      {
        title: 'Latest Government Jobs',
        list: [
          {
            name: 'Coal India Limited Recruitment 2018 – Overman & Dy Surveyor Posts',
            link: 'coalIndia'
          }, {
            name: 'NDMC Recruitment 2018 – Senior Resident Posts',
            link: 'NDMC'
          }, {
            name: 'DRDA Odisha Recruitment 2018 – 43 Multi Purpose Asst Posts',
            link: 'DRDA'
          }, {
            name: 'RPSC Recruitment 2018 – Apply Online for 1421 Headmaster, ASO & Other Posts',
            link: 'RPSC'
          }, {
            name: 'Engineering Jobs',
            link: 'enggjobs'
          }, {
            name: 'Police/Defence jobs',
            link: 'police'
          }, {
            name: 'Medical jobs',
            link: 'medical'
          }, {
            name: '12th pass goverment jobs',
            link: '12pass'
          }, {
            name: '10th pass goverment jobs',
            link: '10pass'
          }
        ]
      },
      {
        title: '',
        list: [
          {
            name: 'Coal India Limited Recruitment 2018 – Overman & Dy Surveyor Posts',
            link: 'coalIndia'
          }, {
            name: 'NDMC Recruitment 2018 – Senior Resident Posts',
            link: 'NDMC'
          }, {
            name: 'DRDA Odisha Recruitment 2018 – 43 Multi Purpose Asst Posts',
            link: 'DRDA'
          }, {
            name: 'RPSC Recruitment 2018 – Apply Online for 1421 Headmaster, ASO & Other Posts',
            link: 'RPSC'
          }, {
            name: 'Engineering Jobs',
            link: 'enggjobs'
          }, {
            name: 'Police/Defence jobs',
            link: 'police'
          }, {
            name: 'Medical jobs',
            link: 'medical'
          }, {
            name: '12th pass goverment jobs',
            link: '12pass'
          }, {
            name: '10th pass goverment jobs',
            link: '10pass'
          }
        ]
      },
      {
        title: 'LATEST GOVERNMENT JOBS',
        list: [
          {
            name: 'Coal India Limited Recruitment 2018 – Overman & Dy Surveyor Posts',
            link: 'coalIndia'
          }, {
            name: 'NDMC Recruitment 2018 – Senior Resident Posts',
            link: 'NDMC'
          }, {
            name: 'DRDA Odisha Recruitment 2018 – 43 Multi Purpose Asst Posts',
            link: 'DRDA'
          }, {
            name: 'RPSC Recruitment 2018 – Apply Online for 1421 Headmaster, ASO & Other Posts',
            link: 'RPSC'
          }, {
            name: 'Engineering Jobs',
            link: 'enggjobs'
          }, {
            name: 'Police/Defence jobs',
            link: 'police'
          }, {
            name: 'Medical jobs',
            link: 'medical'
          }, {
            name: '12th pass goverment jobs',
            link: '12pass'
          }, {
            name: '10th pass goverment jobs',
            link: '10pass'
          }
        ]
      }
    ];

  });
