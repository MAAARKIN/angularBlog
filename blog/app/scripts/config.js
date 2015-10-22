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
    .module('blogApp')
    .constant('myConfig', {
      'url': 'http://localhost:7070/initializr',
      'version': 0.2
    });
