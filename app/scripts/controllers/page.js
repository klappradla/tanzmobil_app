'use strict';

/**
 * @ngdoc function
 * @name tanzmobilApp.controller:PageCtrl
 * @description
 * # PageCtrl
 * Controller of the tanzmobilApp
 */
angular.module('tanzmobilApp')
  .controller('PageCtrl', function ($scope, WpService, $location) {
    WpService.page($location.url()).then(function(response) {
      $scope.page = response;
    });
  });
