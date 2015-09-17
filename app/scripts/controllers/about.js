'use strict';

/**
 * @ngdoc function
 * @name academicoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the academicoApp
 */
angular.module('academicoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
