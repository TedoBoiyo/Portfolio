(function() {
    'use strict'
    angular
        .module('app')
        .directive('wwaTile', wwaTile);

    wwaTile.$inject = [

    ];

    function wwaTile() {
        var directive = {
            transclude: true,
            scope: {
                image: '@',
                projectName: '@',
                skillList: '@',
                summary: '@',
                lastUpdated: '@',
                webLink: '@'
            },
            templateUrl: 'scripts/app/directives/wwaTile/wwaTile.html'
        };

        return directive;
    }
})();