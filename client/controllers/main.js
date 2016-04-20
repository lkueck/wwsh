'use strict';


angular.module('myApp')
  .controller('MainCtrl', ['$scope', function($scope) {
  	$scope.welcome = 'MakerMessage';
    $scope.answers = window.answers;
    $scope.zingArray  = [{username: "Mac", message: "Hey everyone"}, {username: "Mac", message: "Bye everyone"}]//HTTP request to the server 

    console.log("answers in the controler", answers);
  }]);
