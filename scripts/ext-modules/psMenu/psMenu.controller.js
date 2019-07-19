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
        var vm = this;
        vm.setActiveElement = setActiveElement;
        vm.setRoute = setRoute;
        vm.getActiveElement = getActiveElement;

        this.isVertical = function () {
            return $scope.isVertical;
        };

        activate();
        

        function activate() {
            $scope.showMenu = false;
            $scope.isMenuVertical = true;

            $scope.$on('menu-show', function (evt, data) {
                $scope.showMenu = data.show;
            });

            $scope.$on('vertical-menu-event', function (evt, data) {
                $scope.isMenuVertical = data.isMenuVertical
            });

        };

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
    }

    ///////////

    
})();