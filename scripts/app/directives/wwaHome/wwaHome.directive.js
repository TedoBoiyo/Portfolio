(function() {
    'use strict'
    angular
        .module('app')
        .directive('wwaHome', wwaHome);

    wwaHome.$inject = [
        'wwaProjectService'
    ];

    function wwaHome(wwaProjectService) {
        var directive = {
            scope: {

            },
            templateUrl: 'scripts/app/directives/wwaHome/wwaHome.html',
            link: _link
        };

        return directive;

        ///////////

        function _link(scope, elem, attrs) {
            scope.latestProject;
            var projectList = wwaProjectService.getProjects();
            
            for (let i = 0; i < projectList.length; i++) {
                if (!scope.latestProject) {
                    scope.latestProject = projectList[i];
                }
                else if (new Date(scope.latestProject.lastUpdated) < new Date(projectList[i].lastUpdated)) {
                    scope.latestProject = projectList[i]
                }
            }
        }
    }
})();