'use strict';

// wp pages

angular.module('tanzmobil')
  .controller('InterviewCtrl', function ($scope, $http, $location) {
    console.log("location: " + $location.url());

    // get wp page by slug
    $http.get('http://localhost:8888/api/get_posts').success(function(data) {
      $scope.posts = data.posts;
    });
    
  });