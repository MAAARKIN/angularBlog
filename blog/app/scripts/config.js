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
          'backend': 'http://localhost:3000/api',
          'version': 0.2
    });
