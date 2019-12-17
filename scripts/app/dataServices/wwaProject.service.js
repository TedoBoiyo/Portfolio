(function() {
    'use strict'
    angular
        .module('app')
        .factory('wwaProjectService', wwaProjectService);

        wwaProjectService.$inject = [

    ];

    function wwaProjectService() {
        var service = {
            getProjects: getProjects
        }

        return service;
    }

    // Pull info from github when amount increases
    function getProjects() {
        return [
            getGitHubResource()
        ];
    }

    ///////////

    function getGitHubResource() {
        let resource = [];
        let auth = "?client_id=f2290bcc01b5360f62cc&client_secret=bc3890c99a9e0223d7f6a24ef81d3d45abc7f005"

        $.ajax({
            async: false,
            url: "https://api.github.com/users/TedoBoiyo/repos" + auth,
            cache: false,
            headers: {
                Accept: "application/vnd.github.mercy-preview+json",
            },
            method: 'GET',
            success: function(result) {
               result.map(repo => {
                    if (!repo.archived) {
                        resource.push(repo);
                    }
               });
            },
            error: function(err) {
                
            },
            complete: function() {

            }
        });

        return resource;
    }
})();