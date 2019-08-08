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
            projectName: '',
            skills: '',
            summary: '',
            startDate: '',
            webLink: ''
        };
    }

    function getDescentHelper() {
        return {
            image: '',
            projectName: '',
            skills: '',
            summary: '',
            startDate: '',
            webLink: ''
        };
    }

    function getFlashMem() {
        return {
            image: 'content/images/FlashMem.PNG',
            projectName: 'FlashMem',
            skills: ['JavaScript', 'jQuery','html5', 'css'],
            summary: 'A flashcard simulator web application designed to help users learn the basics of programming language and interview preparation.',
            LastUpdated: '03/13/2018',
            webLink: 'https://tedoboiyo.github.io/FlashMem/'
        };
    }
})();