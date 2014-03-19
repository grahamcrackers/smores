'use strict';


var app = angular.module('smoresApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'MyDirectives'
]);


app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/main/about.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
