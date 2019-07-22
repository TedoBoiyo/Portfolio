(function() {
    'use strict'
    angular
        .module('app')
        .directive('wwaHome', wwaHome);

    wwaHome.$inject = [

    ];

    function wwaHome() {
        var directive = {
            scope: {

            },
            template: '<h1>Home Page</h1>'
        };

        return directive;
    }
})();