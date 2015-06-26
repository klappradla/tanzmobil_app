'use strict';

/**
 * @ngdoc directive
 * @name tanzmobilApp.directive:progressBar
 * @description
 * # progressBar
 */
angular.module('tanzmobilApp')
  .directive('progressBar', function () {
    return {
      template: '<div id="progress-bar"></div>',
      restrict: 'E',
      controller: 'PostCtrl',
      controllerAs: 'post',
      link: function postLink(scope, element, attrs) {
        //element.text('this is the progressBar directive');
      }
    };
  });


// var bar = $('#bar'),
//     $window = $(window),
//     docHeight = $(document).height(),
//     baseX = $window.height() / docHeight * 100;

// bar.css('background', '-webkit-linear-gradient(left, red '+ baseX +'%, green '+ baseX +'%)');

// $window.scroll(function(e) {      
//     var x = $window.scrollTop() / docHeight * 100 + baseX;
//     bar.css('background', '-webkit-linear-gradient(left, red '+ x +'%, green '+ x +'%)');
// });