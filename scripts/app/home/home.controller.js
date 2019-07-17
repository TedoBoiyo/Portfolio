(function() {
    'use strict';

    angular
        .module('home')
        .controller('HomeController', HomeController);

    HomeController.$inject = [
        
    ];

    function HomeController() {
        var vm = this;
        

        activate();

        function activate() {
            // $('document').ready(function() {
            //     $('#content').html('home.html')
            // });
            
            // $('#navBtn').on('click', function() {
            //     $('#sideNav').css('width', '200px');
            // });
    
            // $('#navCloseBtn').on('click', function() {
            //     $('#sideNav').css('width', '0px');
            // });
        };
    }

    ///////////

    
})();