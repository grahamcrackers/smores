'use strict';

angular.module('MyDirectives', []);

var app = angular.module('smoresApp', []);

app.directive('bkgrdColor', function() {
    var linkFunction = function(scope, element, attributes) {
        var nav = element.children()[0];
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