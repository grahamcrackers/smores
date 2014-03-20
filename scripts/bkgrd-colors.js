'use strict';

var myDir = angular.module('MyDirectives', []);

myDir.directive('bgColor', function($location, $rootScope) {
    var linkFunction = function(scope, element, attributes) {

        //Fire off the function to change the back ground color after the url has been changed
        $rootScope.$on('$locationChangeSuccess', function(event, next, current){
            if ($location.path() === '/') {
                $('body').css({'background-color': 'blue'});
                console.log($location.path());
            } else {
                $('body').css({'background-color': 'white'});
            }

            //Tells me the path after the change in the url
            $('.nav').on('click', function() {
                console.log("location.path(): " + $location.path())
            });

        });


    };

    return {
        restrict: 'A',
        link: linkFunction
        //transclude: false,
        //scope: '&'
    };
});