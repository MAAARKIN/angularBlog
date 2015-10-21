'use strict';

/**
 * @ngdoc service
 * @name blogApp.myService
 * @description
 * # myService
 * Service in the blogApp.
 */
var service = angular.module('blogApp', ['ngAnimate', 'ngCookies', 'ngResource', 'ngRoute', 'ngSanitize', 'ngTouch']);

service.factory('ArticleService', ['', function(){
    return $resource('url', {}, {
        query: { method: 'GET', isArray: true },
        create: { method: 'POST'}
    });
}]);
