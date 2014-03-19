'use strict';

var myDir = angular.module('MyDirectives', []);

//var app = angular.module('smoresApp', []);

myDir.directive('bgColor', function() {
    var linkFunction = function(scope, element, attributes) {
        var nav = element.parent('body');
        $(nav).on('click', function() {
            $('body').css({'background-color': 'blue'});
        });
    };

    return {
        restrict: 'EA',
        link: linkFunction
        //transclude: false,
        //scope: '&'
    };
});