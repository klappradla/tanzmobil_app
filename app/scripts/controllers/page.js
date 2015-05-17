'use strict';

// wp pages

angular.module('tanzmobil')
  .controller('PageCtrl', function ($scope, $http, $location) {

    // get wp page by slug
    $http.get('http://localhost:8888/api/get_page/?slug=' + $location.url()).success(function(data) {
      $scope.page = data.page;
    });
    
  });