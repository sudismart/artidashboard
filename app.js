'use  strict';

angular
    .module('myApp',[
        'myApp.dashboard',
        'ui.router',
        'ui.bootstrap'
    ])
    .config(['$urlRouterProvider','$stateProvider', '$locationProvider' ,
        function($urlRouterProvider, $stateProvider, $locationProvider){
            $urlRouterProvider.otherwise('/');
            $locationProvider.html5Mode({
                enabled :true,
                requireBase : false
            });
        }
    ]);