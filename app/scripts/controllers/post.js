'use strict';

/**
 * @ngdoc function
 * @name tanzmobilApp.controller:PostCtrl
 * @description
 * # PostCtrl
 * Controller of the tanzmobilApp
 */
angular.module('tanzmobilApp')
  .controller('PostCtrl', function ($scope, $routeParams, WpService) {
    WpService.post($routeParams.post).then(function(response) {
      $scope.post = response;
    });
  });
