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
<<<<<<< HEAD
            link:  _link
=======
            link: _link
>>>>>>> fa6b9c5228a7b7375923a75998fcfe99bf487b3c
        };

        return directive;

        ///////////

        function _link(scope, elem, attrs) {
            scope.skillList = JSON.parse(attrs.skillList);
        }
    }

    ///////////

    function _link(scope, elem, attrs) {
        if(attrs.skillList) {
            scope.skillList = JSON.parse(attrs.skillList);  
        } else {
            scope.skillList = null;
        }
    }
})();