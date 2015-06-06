'use strict';

/**
 * @ngdoc function
 * @name tanzmobilAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tanzmobilAppApp
 */
angular.module('tanzmobilAppApp')
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
