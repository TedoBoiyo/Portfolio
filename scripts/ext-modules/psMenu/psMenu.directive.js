(function() {
    "use strict";

    angular
        .module('psMenu')
        .directive('psMenu', psMenu);
    
    psMenu.$inject = [];

    function psMenu() {
        var directive = {
            scope: {

            },
            transclude: true,
            templateUrl: 'scripts/ext-modules/psMenu/psMenuTemplate.html',
            controller: 'psMenuController',
            link: function(scope, elem, attr) {

            }
        };

        return directive;
    }
})();