"use strict";angular.module("smoresApp",["ngCookies","ngResource","ngSanitize","ngRoute"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main/main.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("smoresApp").controller("MainCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]);