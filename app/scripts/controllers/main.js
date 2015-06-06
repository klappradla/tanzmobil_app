'use strict';

/**
 * @ngdoc function
 * @name tanzmobilApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tanzmobilApp
 */
angular.module('tanzmobilApp')
  .controller('MainCtrl', function ($scope, WpService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    WpService.post('zwei-eulen').then(function(response) {
      console.log(response);
    });
  });