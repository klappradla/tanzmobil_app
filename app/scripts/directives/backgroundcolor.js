'use strict';

/**
 * @ngdoc directive
 * @name tanzmobilApp.directive:backgroundColor
 * @description
 * # backgroundColor
 */
angular.module('tanzmobilApp')
  .directive('backgroundColor', function (categoryColor) {
    var alpha = true;
    
    return function (scope, element, attrs) {
      element.css({
        'background-color': categoryColor.getColor(attrs.backgroundColor, alpha)
        });
    };
  });
