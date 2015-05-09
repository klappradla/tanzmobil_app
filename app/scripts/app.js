'use strict';

/**
 * @ngdoc overview
 * @name tanzmobilApp
 * @description
 * # tanzmobilApp
 *
 * Main module of the application.
 */
angular
  .module('tanzmobil', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {
    // url without # not working yet...
    //$locationProvider.html5Mode(true).hashPrefix('!');

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/interviews', {
        templateUrl: 'views/interview.html',
        controller: 'InterviewCtrl'
      })
      .when('/interviews/:post', {
        templateUrl: 'views/post.html',
        controller: 'PostCtrl'
      })
      .when('/partners', {
        templateUrl: 'views/page.html',
        controller: 'PageCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/page.html',
        controller: 'PageCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
