(function() {
    'use strict';

    angular
        .module('psMenu')
        .controller('psMenuController', psMenuController);

        psMenuController.$inject = [
        '$scope',
        '$rootScope'
    ];

    function psMenuController($scope, $rootScope) {
        $scope.showMenu = true;
        $scope.isMenuVertical = true;

        var ctrl = this;
        ctrl.getActiveElement = getActiveElement;
        ctrl.setActiveElement = setActiveElement;
        ctrl.setRoute = setRoute;
        ctrl.isVertical = isVertical;

        _addBindings();

        ///////////

        function getActiveElement() {
            return $scope.activeElement;
        }

        function setActiveElement(elem) {
            $scope.activeElement = elem;
        }

        function setRoute(route) {
            $rootScope.$broadcast('menu-item-selected-event', 
                {route: route})
        }

        function isVertical() {
            return $scope.isMenuVertical;
        }

        function _addBindings() {
            $scope.$on('menu-show', function (evt, data) {
                $scope.showMenu = data.show;
            });
    
            $scope.$on('vertical-menu-event', function (evt, data) {
                $scope.isMenuVertical = data.isMenuVertical
            });
        }
    }
})();