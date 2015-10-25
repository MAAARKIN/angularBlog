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

    ArticleService.get({id:123 }, function(artigo) {
      $scope.teste = artigo.titulo;
    }); // get() returns a single entry

    // ArticleService.get({id: 123}, function(argument) {
    //   argument
    //   console.log(argument);
    // });
    // console.log(entry);
    console.log(ArticleService.get({id: 123}));
    console.log(ArticleService.query());
    // console.log(ArticleService.query());


  });
