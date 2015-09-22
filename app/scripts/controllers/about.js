'use strict';

/**
 * @ngdoc function
 * @name academicoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the academicoApp
 */
angular.module('academicoApp')
  .controller('AboutCtrl', function ($scope, $location, $http) {
    $scope.sendEmail = function(email, type) {
    	if (email && type) {
    		sendEmail(email, type);
    	}
    }

    function sendEmail(email, type) {
    	$http.post('/launch/user', {email : email, type : type}).then(function(response) {
			  	alert('Gracias por contactarnos.');
	    }, function(response) {
	    	    alert('Ha ocurrido un error inesperado.');
		}).finally(function() {
			$location.path('/#/');
		});
    }
  });
