(function() {
    'use strict'
    angular
        .module('app')
        .factory('wwaTileService', wwaTileService);

    wwaTileService.$inject = [

    ];

    function wwaTileService() {
        var service = {
            getProjects: getProjects
        }

        return service;
    }

    function getProjects() {

    }

    ///////////

    function getProjectResource() {
        // Pull info from github when amount increases
        // Portfolio

        // DescentHelper

        // FlashMem
    }
})();