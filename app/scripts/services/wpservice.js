'use strict';

/**
 * @ngdoc service
 * @name tanzmobilApp.WpService
 * @description
 * # WpService
 * Service in the tanzmobilApp.
 */
angular.module('tanzmobilApp')
  .service('WpService', function ($http) {
  // AngularJS will instantiate a singleton by calling "new" on this function

    var apiUrl = 'http://localhost:8888/api/';

    function allPosts() {
      return queryApi('get_posts').then(function(response) {
        return response.data.posts;
      });
    }

    function recentPosts() {
      return queryApi('get_recent_posts')
        .then(function(response) {
          return response.data.posts;
        });
    }

    // get wp page by slug
    function page(slug) {
      return queryApi('get_page/?slug=' + slug)
        .then(function(response) {
          return response.data.page;
        });
    }

    function post(slug) {
      return queryApi('get_post/?slug=' + slug)
        .then(function(response) {
          return response.data.post;
        });
    }

    function postsByCategory(slug) {
      return queryApi('get_category_posts/?slug=' + slug)
        .then(function(response) {
          return response.data.posts;
        });      
    }

    function queryApi(url) {
      return $http
        .get(apiUrl + url, { cache: true })
        .then(function(response) {
          return response;
        });
    }

    return {
      allPosts: allPosts,
      recentPosts: recentPosts,
      page: page,
      post: post,
      postsByCategory, postsByCategory
    };

  });