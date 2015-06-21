'use strict';

/**
 * @ngdoc directive
 * @name tanzmobilApp.directive:interviewBox
 * @description
 * # interviewBox
 */
angular.module('tanzmobilApp')
  .directive('interviewBox', function () {
    return {
      restrict: 'E',
      templateUrl: 'views/interviewbox.html',
      link: function postLink(scope, element, attrs) {
        //element.text('this is the interviewBox directive');
      }
    };
  });