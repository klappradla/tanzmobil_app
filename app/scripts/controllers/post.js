'use strict';

// wp pages

angular.module('tanzmobil')
  .controller('PostCtrl', function ($scope, $http, $routeParams) {

    // get wp post by slug
    $http.get('http://localhost:8888/api/get_post/?slug=' + $routeParams.post).success(function(data) {
      $scope.post = data.post;
      console.log(data);
    });
    
  });