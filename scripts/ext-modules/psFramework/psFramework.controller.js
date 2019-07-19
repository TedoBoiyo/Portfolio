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
        var vm = this;

        activate();

        function activate() {
            $scope.isMenuVisible = true;
            $scope.isMenuButtonVisible = true;

            $($window).on('resize.psFramework', function(){
                $scope.$apply(function() {
                    checkWidth();
                    broadcastMenuState();
                });
            });

            $scope.$on("$destroy", function() {
                $($window).off("resize.psFramework"); // remove the handler
            });

            var checkWidth = function () {
                var width = Math.max($($window).innerWidth(), $window.innerWidth);
                $scope.isMenuVisible = (width > 430);
                $scope.isMenuButtonVisible = !$scope.isMenuVisible;
            };

            $scope.menuButtonClicked = function() {
                $scope.isMenuVisible = !$scope.isMenuVisible;
                broadcastMenuState();
            }

            var broadcastMenuState = function() {
                $rootScope.$broadcast('menu-show', {
                    show: $scope.isMenuVisible
                });

                $rootScope.$broadcast('vertical-menu-event', {
                    isMenuVertical: $scope.isMenuButtonVisible
                });
            }

            $timeout(function() {
                checkWidth();
            }, 0);

            

            $scope.$on('menu-item-selected-event', function(evt, data){
                $scope.routeString = data.route;
                checkWidth();
                broadcastMenuState();
            });
        };
    }

    ///////////

    
})();