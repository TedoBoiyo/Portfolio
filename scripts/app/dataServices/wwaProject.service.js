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
        return {
            image: 'content/images/Ted-Professional.jpg',
            projectName: 'My Portfolio',
            skillList: [
                'JavaScript',
                'jQuery',
                'AngularJS',
                'SPA',
                'HTML',
                'CSS'
            ],
            summary: 'My personal web portfolio!',
            lastUpdated: '08/10/2019',
            webLink: 'https://tedoboiyo.github.io/Portfolio/'
        };
    }

    function getDescentHelper() {
        return {
            image: '',
            projectName: 'Descent Tracker Helper',
            skillList: [
                'JavaScript',
                'jQuery',
                'AngularJS',
                'SPA',
                'HTML',
                'CSS'
            ],
            summary: 'A web application designed to help enhance the user experience while playing the Descent board game.',
            lastUpdated: '07/08/2019',
            webLink: 'https://tedoboiyo.github.io/Descent2ndEditionTrackerHelper/'
        };
    }

    function getFlashMem() {
        return {
            image: 'content/images/FlashMem.PNG',
            projectName: 'FlashMem',
            skillList: [
                "JavaScript", 
                "jQuery",
                "HTML5", 
                "CSS"
            ],
            summary: 'A flashcard simulator web application designed to help users learn the basics of programming language and interview preparation.',
            lastUpdated: '03/13/2018',
            webLink: 'https://tedoboiyo.github.io/FlashMem/'
        };
    }
})();