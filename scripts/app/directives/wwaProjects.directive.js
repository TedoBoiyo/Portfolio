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
            template: '<h1>Projects Page</h1>'
        };

        return directive;
    }
})();