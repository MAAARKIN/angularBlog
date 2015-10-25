'use strict';

/**
* @ngdoc service
* @name blogApp.myService
* @description
* # myService
* Service in the blogApp.
*/
var service = angular.module('blogApp');

service.factory('ArticleService', ['$resource', 'myConfig', function($resource, myConfig) {
  return $resource(myConfig.url + '/artigos/:id', {}, {
    query: {method:'GET', isArray:true}
  });
}]);
