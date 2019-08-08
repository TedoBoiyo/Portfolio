(function() {
    'use strict'
    angular
        .module('app')
        .directive('wwaProjects', wwaProjects);

    wwaProjects.$inject = [

    ];

    function wwaProjects() {
        var directive = {
            scope: {

            },
            templateUrl: 'scripts/app/directives/wwaProjects/wwaProjects.html',
            controller: 'wwaProjectsController'
        };

        return directive;
    }
})();