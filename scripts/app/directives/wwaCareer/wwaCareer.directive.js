(function() {
    'use strict'
    angular
        .module('app')
        .directive('wwaCareer', wwaCareer);

    wwaCareer.$inject = [

    ];

    function wwaCareer() {
        var directive = {
            scope: {

            },
            templateUrl: 'scripts/app/directives/wwaCareer/wwaCareer.html'
        };

        return directive;
    }
})();