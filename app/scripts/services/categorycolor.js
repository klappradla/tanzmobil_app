'use strict';

/**
 * @ngdoc service
 * @name tanzmobilApp.categoryColor
 * @description
 * # categoryColor
 * Service in the tanzmobilApp.
 */
angular.module('tanzmobilApp')
  .service('categoryColor', function () {
    function getColor(category) {
      switch(category) {
        case 'german':
          return 'rgba(0,153,6,0.5)';
        case 'english':
          return 'rgba(255,0,0,0.5)';
        case 'french':
          return 'rgba(13,73,255,0.5)';
        default:
          return 'rgba(51,51,51,0.5)';
      }
    }

    return {
      getColor: getColor
    };
  });
