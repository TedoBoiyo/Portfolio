(function() {
    'use strict';

    angular
        .module('home')
        .controller('HomeController', HomeController);

    HomeController.$inject = [
        '$scope'
    ];

    function HomeController($scope) {
        var vm = this;
    }

    activate();

    ///////////

    function activate() {
        $('#navBtn').on('click', function() {
            $('#sideNav').css('width', '200px');
        });

        $('#navCloseBtn').on('click', function() {
            $('#sideNav').css('width', '0px');
        });
    };
})();