'use strict';


angular.module('myApp')
  .controller('MainCtrl', ['$scope', function($scope) {
  	$scope.welcome = 'MakerMessage';
    $scope.answers = window.answers;
    
    console.log("answers in the controler", answers);
  }]);
