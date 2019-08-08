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
                image: '@',
                projectName: '@',
                skills: '@',
                summary: '@',
                startDate: '@',
                webLink: '@'
            },
            templateUrl: 'scripts/app/directives/wwaTile/wwaTile.html'
        };

        return directive;
    }
})();