'use strict';

/**
 * @ngdoc overview
 * @name academicoApp
 * @description
 * # academicoApp
 *
 * Main module of the application.
 */
angular
  .module('academicoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/contact-us', {
        templateUrl: 'views/contact-us.html',
        controller: 'AboutCtrl'
      })
      .when('/student', {
        templateUrl: 'views/student.html',
        controller: 'AboutCtrl'
      })
      .when('/teacher', {
        templateUrl: 'views/teacher.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
