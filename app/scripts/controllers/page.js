'use strict';

// wp pages

angular.module('tanzmobil')
  .controller('PageCtrl', function ($scope, $http, $location) {
    console.log("location: " + $location.url());

    // get wp page by slug
    $http.get('http://localhost:8888/api/get_page/?slug=' + $location.url()).success(function(data) {
      $scope.page = data.page;
    });
    
  });