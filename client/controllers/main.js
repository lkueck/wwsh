'use strict';


angular.module('myApp')
  .controller('MainCtrl', ['$scope','$interval','Auth','Service', function($scope, $interval, Auth, Service) {
  	$scope.welcome = 'MakerMessage';
    $scope.answers = window.answers;
    var createdObjs = [answers.zing1, answers.zing2, answers.zing3, answers.zing4];
    var usernames = [answers.zing1.username, answers.zing2.username, answers.zing3.username, answers.zing4.username];

    // $scope.zingArray  = [{username: "Mac", message: "Hey everyone"}, {username: "Mac", message: "Bye everyone"}]//HTTP request to the server
    $scope.getZings = function(){
      Service.getAllZings()
      .then(function(response){
        if($scope.answers.sectionFour){
          $scope.zingArray = response.filter(function(zing){
            return usernames.indexOf(zing.username) > -1
          })
        } else {
        $scope.zingArray = response
        }
      })
    }
    $scope.getZings();
    $interval(function(){
      $scope.getZings();
    }, 2000)
    $scope.zingArray;
    $scope.zing = {
    	username: '',
    	message: ''
    }

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
  	$scope.zingify = function(username, message){
      console.log($scope.zingArray)
  		Service.zingify(username, message)
  		.then(function(resp){
        $scope.username = "";
        $scope.message = "";
  		})
  		.catch(function(resp){
  			console.log('error sending zing', error);
  		})
  	}


    console.log('answer scope', $scope.answers)

  }]);
