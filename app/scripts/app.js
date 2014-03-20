'use strict';


var app = angular.module('smoresApp', [
  //Angular Modules
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',

  //Third Party Modules
  'snap',

  //Custom Modules
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
      .when('/contact', {
        templateUrl: 'views/main/contact.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
