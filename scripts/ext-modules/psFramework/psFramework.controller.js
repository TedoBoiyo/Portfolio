(function() {
    'use strict';

    angular
        .module('psFramework')
        .controller('psFrameworkController', psFrameworkController);

    psFrameworkController.$inject = [
        '$scope',
        '$window',
        '$timeout',
        '$rootScope'
    ];

    function psFrameworkController($scope, $window, $timeout, $rootScope) {
        $scope.isMenuVisible = true;
        $scope.isMenuButtonVisible = true;
        $scope.isLoading = true;

        $scope.menuButtonClicked = menuButtonClicked;

        _addBindings();

        // Check window size on start up
        $timeout(function() {
            checkWidth();
            broadcastMenuState();
            $scope.isLoading = false;
        }, 2000);

        ///////////

        function menuButtonClicked() {
            $scope.isMenuVisible = !$scope.isMenuVisible;
            broadcastMenuState();
        }

        function checkWidth() {
            var width = Math.max($($window).innerWidth(), $window.innerWidth);
            $scope.isMenuVisible = (width > 754);
            $scope.isMenuButtonVisible = !$scope.isMenuVisible;
        }

        function broadcastMenuState() {
            $rootScope.$broadcast('menu-show', {
                show: $scope.isMenuVisible
            });

            $rootScope.$broadcast('vertical-menu-event', {
                isMenuVertical: $scope.isMenuButtonVisible
            });
        }

        function _addBindings() {
            $($window).on('resize.psFramework', function(){
                $scope.$apply(function() {
                    checkWidth();
                    broadcastMenuState();
                });
            });
    
            $scope.$on("$destroy", function() {
                $($window).off("resize.psFramework"); // remove the handler
            });

            $scope.$on('menu-item-selected-event', function(evt, data){
                $scope.routeString = data.route;
                checkWidth();
                broadcastMenuState();
            });
        };
    }
})();