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
                summary: '@',
                lastUpdated: '@',
                webLink: '@'
            },
            templateUrl: 'scripts/app/directives/wwaTile/wwaTile.html',
            link:  _link
        };

        return directive;

        ///////////

        function _link(scope, elem, attrs) {
            scope.skillList = JSON.parse(attrs.skillList);
        }
    }
})();