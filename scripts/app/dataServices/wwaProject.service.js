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
            getFlashMem()
        ];
    }

    ///////////

    function getPortfolio() {
        return {
            image: '',
            projectName: 'My Portfolio',
            skillList: [
                'JavaScript', 
                'jQuery',
                'AngularJS',
                'SPA',
                'HTML5', 
                'CSS'
            ],
            summary: '',
            lastUpdated: '',
            webLink: ''
        };
    }

    function getDescentHelper() {
        return {
            image: '',
            projectName: '',
            skillList: '',
            summary: '',
            lastUpdated: '',
            webLink: ''
        };
    }

    function getFlashMem() {
        return {
            image: 'content/images/FlashMem.PNG',
            projectName: 'FlashMem',
            skillList: [
                'JavaScript', 
                'jQuery',
                'HTML5', 
                'CSS'
            ],
            summary: 'A flashcard simulator web application designed to help users learn the basics of programming language and interview preparation.',
            lastUpdated: '03/13/2018',
            webLink: 'https://tedoboiyo.github.io/FlashMem/'
        };
    }
})();