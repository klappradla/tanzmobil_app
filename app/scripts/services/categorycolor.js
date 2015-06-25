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
    function getColorAlpha(category, alpha) {
      alpha = alpha || false;
      switch(category) {
        case 'german':
          if (alpha) {
            return 'rgba(237,85,101,0.5)';  
          }
          return '#ED5565';
        case 'english':
          if (alpha) {
            return 'rgba(252,110,81,0.5)';
          }
          return '#FC6E51';
        case 'french':
          if (alpha) {
            return 'rgba(172,146,236,0.5)';
          }
          return '#AC92EC';
        default:
          if (alpha) {
            return 'rgba(107,107,107,0.5)';
          }
          return '#6B6B6B';
      }
    }

    function getColor(category) {
      switch(category) {
        case 'german':
          return 'rgba(237,85,101,0.5)';
        case 'english':
          return 'rgba(252,110,81,0.5)';
        case 'french':
          return 'rgba(172,146,236,0.5)';
        default:
          return 'rgba(107,107,107,0.5)';
      }
    }

    return {
      getColor: getColor
    };
  });
