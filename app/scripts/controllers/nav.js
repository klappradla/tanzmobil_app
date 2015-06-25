'use strict';

/**
 * @ngdoc function
 * @name tanzmobilApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the tanzmobilApp
 */
angular.module('tanzmobilApp')
  .controller('NavCtrl', function ($scope, $location) {
    
    function isActive(view) {
      return view === $location.path();
    };

    return {
      isActive: isActive
    };    
  });
