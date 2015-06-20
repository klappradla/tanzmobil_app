'use strict';

/**
 * @ngdoc directive
 * @name tanzmobilApp.directive:backgroundImage
 * @description
 * # backgroundImage
 */
angular.module('tanzmobilApp')
  .directive('backgroundImage', function () {
    return function (scope, element, attrs) {
      element.css({
        'background-image': 'url(' + attrs.backgroundImage + ')',
          'background-size': 'cover',
          'background-repeat': 'no-repeat',
          'background-position': 'center center'
        });
    };
  });