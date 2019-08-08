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
        var vm = this;
        vm.projectList = null;

        activate();

        ///////////

        function activate() {
            vm.projectList = wwaProjectService.getProjects();
        }

    }
})();