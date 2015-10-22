'use strict';

/**
 * @ngdoc function
 * @name blogApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the blogApp
 */
angular.module('blogApp')
  .controller('AboutCtrl', function ($scope, ArticleService) {

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    console.log(ArticleService.get({id: 123}));


  });
