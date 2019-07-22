(function() {
    'use strict'
    angular
        .module('app')
        .directive('wwaCareer', wwaCareer);

    wwaCareer.$inject = [

    ];

    function wwaCareer() {
        var directive = {
            scope: {

            },
            template: '<h1>Career Page</h1>'
        };

        return directive;
    }
})();