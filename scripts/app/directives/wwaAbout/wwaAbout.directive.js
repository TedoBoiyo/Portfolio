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
            templateUrl: 'scripts/app/directives/wwaAbout/wwaAbout.html'
        };

        return directive;
    }
})();