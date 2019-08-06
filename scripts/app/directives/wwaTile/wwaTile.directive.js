(function() {
    'use strict'
    angular
        .module('app')
        .directive('wwaTile', wwaTile);

        wwaTile.$inject = [

    ];

    function wwaTile() {
        var directive = {
            scope: {

            },
            templateUrl: 'scripts/app/directives/wwaTile/wwaTile.html',
            controller: 'wwaTileController'
        };

        return directive;
    }
})();