(function(){
    'use strict';
    angular.module('app').config(['$routeProvider', function($routeProvider) {
        var routes = [
            {
                url: '/home',
                config: {
                    template: '<wwa-home></wwa-home>'
                }
            },
            {
                url: '/about',
                config: {
                    template: '<wwa-about></wwa-about>'
                }
            },
            {
                url: '/career',
                config: {
                    template: '<wwa-career></wwa-career>'
                }
            },
            {
                url: '/projects',
                config: {
                    template: '<wwa-projects></wwa-projects>'
                }
            }
        ];

        routes.forEach(function (route) {
            $routeProvider.when(route.url, route.config);
        });

        $routeProvider.otherwise({redirectTo: '/home'});
    }]);
})();