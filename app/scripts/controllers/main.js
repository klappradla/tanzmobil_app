'use strict';

/**
 * @ngdoc function
 * @name tanzmobilApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tanzmobilApp
 */
angular.module('tanzmobil')
  .controller('MainCtrl', function ($scope, $http) {

    // get recent posts
    $http.get('http://localhost:8888/api/get_recent_posts/').success(function(data) {
      $scope.posts = data.posts;
    });
    
  });