'use strict';

/**
 * @ngdoc overview
 * @name easyJobSearchApp
 * @description
 * # easyJobSearchApp
 *
 * Main module of the application.
 */
angular.module('easyJobSearchApp', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ui.router',
  'ngSanitize',
  'ngTouch'
]).config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/home');

  $stateProvider

    // HOME STATES AND NESTED VIEWS ========================================
    .state('main', {
      views: {
        'header': {
          templateUrl: 'views/header.html',
          controller: 'HeaderCtrl',
          controllerAs: 'header'
        },
        'footer': {
          templateUrl: 'views/footer.html',
          controller: 'footerCtrl',
          controllerAs: 'footer'
        }
      }
    })
    .state('main.home', {
      url: '/home',
      views: {
        'container@': {
          templateUrl: 'views/home.html',
          controller: 'HomeCtrl',
          controllerAs: 'home'
        }
      }
    })



    // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
    .state('main.railway', {
      url: '/railway',
      views: {
        'container@': {
          templateUrl: 'views/railway.html',
          controller: 'RailwayCtrl',
          controllerAs: 'railway'
        }
      }

    })

    .state('main.job', {
      url: '/job/:categoryId',
      views: {
        'container@': {
          templateUrl: 'views/job.html',
          controller: 'JobCtrl',
          controllerAs: 'job'
        }
      },
    })

    .state('main.teaching', {
      url: '/teacher',
      views: {
        'container@': {
          templateUrl: 'views/teacher.html',
          controller: 'TeacherCtrl',
          controllerAs: 'teacher'
        }
      }
    })
    .state('main.allstate', {
      url: '/allstate',
      views: {
        'container@': {
          templateUrl: 'views/allstate.html',
          controller: 'AllStateCtrl',
          controllerAs: 'allstate'
        }
      }
    })
    .state('main.police', {
      url: '/police',
      views: {
        'container@': {
          templateUrl: 'views/police.html',
          controller: 'policeCtrl',
          controllerAs: 'police'
        }
      }
    })

    .state('main.allnoti', {
      url: '/allnoti',
      views: {
        'container@': {
          templateUrl: 'views/allnoti.html',
          controller: 'AllNotiCtrl',
          controllerAs: 'allnoti'
        }
      }
    })

    .state('main.bank', {
      url: '/bank',
      views: {
        'container@': {
          templateUrl: 'views/bank.html',
          controller: 'BankCtrl',
          controllerAs: 'bank '
        }
      }
    });
});
