'use strict';

/**
 * @ngdoc function
 * @name tanzmobilApp.controller:InterviewsCtrl
 * @description
 * # InterviewsCtrl
 * Controller of the tanzmobilApp
 */
angular.module('tanzmobilApp')
  .controller('InterviewsCtrl', function ($scope, WpService) {

    WpService.allPosts().then(function(response) {
      $scope.posts = response;
    });
  });
