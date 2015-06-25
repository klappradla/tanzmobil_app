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
  .module('tanzmobilApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {

    //$locationProvider.html5Mode(true).hashPrefix('!');

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/interviews', {
        templateUrl: 'views/interviews.html',
        controller: 'InterviewsCtrl',
        controllerAs: 'interviews'
      })
      .when('/interviews/:post', {
        templateUrl: 'views/post.html',
        controller: 'PostCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/page.html',
        controller: 'PageCtrl'
      })
      .when('/partners', {
        templateUrl: 'views/page.html',
        controller: 'PageCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
