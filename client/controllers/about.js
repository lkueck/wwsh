'use strict';

angular.module('myApp')
  .controller('AboutCtrl', ['$scope','$http', function($scope,$http) {
    $scope.errorMessage = '';
  	$scope.user = {
  		username: '',
  		password: ''
  	};
  	$scope.login = function() {
  		Auth.login($scope.user)
  		.then(function(resp){
  			if (resp.error) {
  				$scope.errorMessage = resp.error;
          $scope.user.username = '';
          $scope.user.password = '';
  			} else {
          sessionStorage.setItem('ZING', resp.token);
  			}
  		})
  		.catch(function(error) {
  			console.error('error when login attempted: ', error);
  		});
  	};	
  }]);
