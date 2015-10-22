'use strict';

/**
 * @ngdoc service
 * @name blogApp.myService
 * @description
 * # myService
 * Service in the blogApp.
 */
var service = angular.module('blogApp', ['ngAnimate', 'ngCookies', 'ngResource', 'ngRoute', 'ngSanitize', 'ngTouch']);

service.factory('ArticleService', function($resource, myConfig){
    return $resource(myConfig.url + '/artigos/:id', {}, {
        query: { method: 'GET', isArray: true }
    });
});
