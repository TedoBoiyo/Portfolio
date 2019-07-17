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

        activate();

        function activate() {

        };

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