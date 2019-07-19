(function() {
    "use strict";

    angular
        .module('psMenu')
        .directive('psMenuItem', psMenuItem);
    
    psMenuItem.$inject = [];

    function psMenuItem() {
        var directive = {
            require: '^psMenu',
            scope: {
                label: '@',
                icon: '@',
                route: '@'
            },
            templateUrl: 'scripts/ext-modules/psMenu/psMenuItemTemplate.html',
            link: function(scope, elem, attr, ctrl) {

                scope.isActive = function () {
                    return elem === ctrl.getActiveElement();
                }

                scope.isVertical = function () {
                    return ctrl.isVertical();
                }

                elem.on('click', function(evt) {
                    evt.stopPropagation();
                    evt.preventDefault();
                    scope.$apply(_activateSelection)
        
                    function _activateSelection(scope) {
                        ctrl.setActiveElement(elem);
                        ctrl.setRoute(scope.route);
                    };
                });
            }
        };

        return directive;
    }
})();