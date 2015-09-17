'use strict';

/**
 * @ngdoc function
 * @name academicoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the academicoApp
 */
angular.module('academicoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
