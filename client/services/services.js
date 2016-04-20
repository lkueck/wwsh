angular.module('myApp.services',[])

.factory('Service', function($http, $window, $location) {
	var service = {};

  // service.saveQuestion = function(question, answers) {
  //   return $http({
  //     method: 'POST',
  //     url: '/admin/question',
  //     data: { question:question, answers:answers }
  //   })
  //   .then(function(res){
  //     return res.data;
  //   })
  //   .catch(function(error){
  //     console.error('Error posting question', error);
  //   });
  // };

  // service.getQuestion = function(userId) {
  //   return $http({
  //     method: 'GET',
  //     url: '/user/question/?user_id=' + userId
  //   })
  //   .then(function(res) {
  //     return res.data;
  //   })
  //   .catch(function(error) {
  //     console.error('Error getting question', error);
  //   });
  // };

  // service.findOrCreateUser = function(userId) {
  //   return $http({
  //     method: 'POST',
  //     url: '/user/findOrCreate',
  //     data: {userId: userId}
  //   })
  //   .then(function(res) {
  //     return res.data;
  //   })
  //   .catch(function(error) {
  //     console.error('Error creating user', error);
  //   });    
  // }

  // service.getResponses = function() {
  //   return $http({
  //     method: 'GET',
  //     url: '/admin/response'
  //   })
  //   .then(function(res) {
  //     return res.data;
  //   })
  //   .catch(function(error) {
  //     console.error('Error saving response', error);
  //   })
  // };
	
	return service;

})
.factory('Auth', function($http, $window, $location) {
  var auth = {};
  auth.login = function(user) {
    return $http({
      method: 'POST',
      url: '/user/login',
      data: user
    })
    .then(function(res) {
      return res.data;
    })
    .catch(function(error) {
      console.error('Error logging into the ZINGERS:', error);
    })
  };

  auth.logout = function() {
    sessionStorage.removeItem('ZING');
  };

  auth.isAuth = function() {
    return !!sessionStorage.getItem('ZING');
  }

  return auth;
})
