(function() {
    "use strict";

    angular
        .module('psFramework')
        .directive('psFramework', psFramework);

        psFramework.$inject = [
    
    ];

    //usage: <ps-framework></ps-framework>
    function psFramework() {
        var directive = {
            transclude: true,
            scope: {
                name: '@',
                position: '@'
            },
            controller: 'psFrameworkController',
            templateUrl: 'scripts/ext-modules/psFramework/psFrameworkTemplate.html'
        };

        return directive;
    }
})();