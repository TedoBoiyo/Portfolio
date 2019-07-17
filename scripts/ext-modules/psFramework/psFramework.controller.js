(function() {
    'use strict';

    angular
        .module('psFramework')
        .controller('psFrameworkController', psFrameworkController);

    psFrameworkController.$inject = [
        '$scope'
    ];

    function psFrameworkController($scope) {
        var vm = this;
        
        activate();

        function activate() {
            $scope.$on('menu-item-selected-event', routeEvent)
        };

        function routeEvent (evt, data) {
            $scope.routeString = data.route;
        }
    }

    ///////////

    
})();