(function() {
    'use strict'
    angular
        .module('app')
        .directive('wwaAbout', wwaAbout);

    wwaAbout.$inject = [

    ];

    function wwaAbout() {
        var directive = {
            scope: {

            },
            template: '<h1>About Page</h1>'
        };

        return directive;
    }
})();