'use strict';

/**
 * @ngdoc overview
 * @name blogApp
 * @description
 * # blogApp
 *
 * Main module of the application.
 */
angular
  .module('blogApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {templateUrl: 'views/main.html', controller: 'MainCtrl', controllerAs: 'main'})
      .when('/about', {templateUrl: 'views/about.html', controller: 'AboutCtrl', controllerAs: 'about'})
      //REST Pattern to article
      //just a form to send a article
      .when('/articles/new', {templateUrl: 'views/article/new.html', controller: 'ArticleController'})
      //get a article by resource to edit or view.
      .when('/articles/:id', {templateUrl: 'views/article/edit.html', controller: 'ArticleController'})
      //get a list of articles by resource.
      .when('/articles', {templateUrl: 'views/article/list.html', controller: 'ArticleController'})
      .otherwise({redirectTo: '/'}); 
  });
