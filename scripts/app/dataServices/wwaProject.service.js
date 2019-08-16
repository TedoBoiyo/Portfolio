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
            getDescentHelper(),
            getPortfolio(),
            getFlashMem()
        ];
    }

    ///////////

    function getPortfolio() {
        let repoPortfolio = getGitHubResource('Portfolio');
        repoPortfolio.image = 'content/images/Ted-Professional.jpg'
        repoPortfolio.skillList = [
            'JavaScript',
            'jQuery',
            'AngularJS',
            'SPA',
            'HTML',
            'CSS'
        ];

        return repoPortfolio;
    }

    function getDescentHelper() {
        let repoDescent = getGitHubResource('Descent2ndEditionTrackerHelper');
        repoDescent.image = ''
        repoDescent.skillList = [
            'JavaScript',
            'jQuery',
            'AngularJS',
            'SPA',
            'HTML',
            'CSS'
        ];

        return repoDescent;
    }

    function getFlashMem() {
        let repoFlash = getGitHubResource('FlashMem');
        repoFlash.image = 'content/images/FlashMem.PNG'
        repoFlash.skillList = [
            'JavaScript',
            'jQuery',
            'HTML',
            'CSS'
        ];

        return repoFlash;
    }

    function getGitHubResource(repoName) {
        var resource = null;
        let auth = "?client_id=f2290bcc01b5360f62cc&client_secret=bc3890c99a9e0223d7f6a24ef81d3d45abc7f005"
        
        $.ajax({
            async: false,
            url: "https://api.github.com/repos/TedoBoiyo/" + repoName + auth,
            cache: false,
            method: 'GET',
            success: function(result) {
               resource = result;
            },
            error: function(err) {
                
            },
            complete: function() {

            }
        });

        return resource;
    }
})();