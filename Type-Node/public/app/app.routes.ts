﻿angular.module('appRoutes', ['ngRoute'])
        .config(($routeProvider, $locationProvider) => {

        $routeProvider
            .when('/', {
                templateUrl: 'app/views/pages/home.html'
            })
            .when('/login', {
                templateUrl: 'app/views/pages/login.html'
            });

        $locationProvider.html5Mode(true);

    });
