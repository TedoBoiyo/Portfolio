(function() {
    'use strict';

    angular
        .module('app')
        .controller('wwaProjectsController', wwaProjectsController);

        wwaProjectsController.$inject = [
        '$scope',
        'wwaProjectService'
    ];

    function wwaProjectsController($scope, wwaProjectService) {
        $scope.projectList = null;

        activate();

        ///////////

        function activate() {
            $scope.projectList = wwaProjectService.getProjects()[0];
            console.log($scope.projectList);
        }

    }
})();