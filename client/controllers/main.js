'use strict';


angular.module('myApp')
  .controller('MainCtrl', ['$scope','Auth','Service', function($scope, Auth, Service) {
  	$scope.welcome = 'MakerMessage';
    $scope.answers = window.answers;
    $scope.zingArray  = [{username: "Mac", message: "Hey everyone"}, {username: "Mac", message: "Bye everyone"}]//HTTP request to the server 
    $scope.zing = {
    	username: '',
    	message: ''
    }
    console.log("answers in the controler", answers);
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
          sessionStorage.setItem('ZING', resp.username);
  			}
  		})
  		.catch(function(error) {
  			console.error('error when login attempted: ', error);
  		});
  	};
  	$scope.signup = function() {
  		Auth.signup($scope.user)
  		.then(function(resp){
  			if (resp.error) {
  				$scope.errorMessage = resp.error;
          $scope.user.username = '';
          $scope.user.password = '';
  			} else {
          sessionStorage.setItem('ZING', resp.username);
  			}
  		})
  		.catch(function(error) {
  			console.error('error when login attempted: ', error);
  		});
  	};
  	$scope.zingify = function(){
  		Service.zingify()
  		.then(function(resp){
  			console.log('zingify', resp);
  		})
  		.catch(function(resp){
  			console.log('error sending zing', error);
  		})
  	}
  }]);
