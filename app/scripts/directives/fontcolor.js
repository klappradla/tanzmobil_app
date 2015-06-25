'use strict';

/**
 * @ngdoc directive
 * @name tanzmobilApp.directive:fontColor
 * @description
 * # fontColor
 */
angular.module('tanzmobilApp')
  .directive('fontColor', function (categoryColor) {
    return function (scope, element, attrs) {
      element.css({
        'color': categoryColor.getColor(attrs.fontColor)
        });
    };
  });
