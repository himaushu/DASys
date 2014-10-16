var app = angular.module('DASys', ['ngGrid', "ui.router", "ngAnimate", 'ui.bootstrap']); //'ngRoute'

app.config(['$stateProvider', '$urlRouterProvider',
function ($stateProvider, $urlRouterProvider) {
    //$locationProvider.html5Mode(false).hashPrefix('!');
    $stateProvider
    .state("Home", {
        url: "/Home",
        templateUrl: 'PartialViews/LandingPage.html',
    })
    .state("DBTemplate", {
        //abstract: true,
        url: '/DBTemplate',
        templateUrl: 'PartialViews/MainTemplate.html',
    })
    .state("DBTemplate.Add", {
        //abstract: true,
        url: 'Add',
        views: {
            'BOTTOM': {
                templateUrl: 'PartialViews/AddTemplate.html',
                controller: 'TemplateController'
            }
        }
    })
    .state('UserCreation', {
        url: '/UserCreation',
        templateUrl: 'PartialViews/UserCreation.html',
        controller: 'UsersController'
    })
    .state('UploadExcel', {
        url: '/UploadExcel',
        templateUrl: 'PartialViews/UploadExcel.html',
        controller: 'XLSXReaderController'
    })
  $urlRouterProvider.otherwise('/Home');
}]);

/*
//app.config(whenConfig); 
//app.config(stateConfig);


var whenConfig = ['$urlRouterProvider', function($urlRouterProvider) {
  
    $urlRouterProvider
      .when('/AddModTemplate', ['$state', function ($state) {
          $state.templateUrl('PartialViews/AddTemplate.html' );
          $state.controller('TemplateController');
    }])
    .otherwise('/');
}];
var stateConfig = ['$stateProvider', function($stateProvider) {
  
  $stateProvider
    .state('app', {
        url: '/app',
        views: {
          '@' : {
            templateUrl: 'layout.html',
          },
          'top@app' : { templateUrl: 'tpl.top.html',},
          'left@app' : { templateUrl: 'tpl.left.html',},
          'main@app' : { templateUrl: 'tpl.main.html',},
        },
      })
    .state('app.list', {
        url: '/list',
        templateUrl: 'list.html',
      })
    .state('app.list.detail', {
        url: '/:id',
        views: {
          'detail@app' : {
            templateUrl: 'detail.html',
            controller: 'DetailCtrl'
          },
        },
      })
}];


app.config(function ($routeProvider) {
    $routeProvider
        .when('/AddModTemplate',
            {
                controller: 'TemplateController',
                templateUrl: 'PartialViews/AddModTemplate.html'
            })
        //Define a route that has a route parameter in it (:customerID)
        //.when('/customerorders/:customerID',
        //    {
         //       controller: 'CustomerOrdersController',
         //       templateUrl: '/app/partials/customerOrders.html'
         //   })
        //Define a route that has a route parameter in it (:customerID)
        .when('/DataUpload',
            {
                controller: 'DataUploadController',
                templateUrl: 'PartialViews/DataUpload.html'
            })
        .when('/UserCreation',
            {
                controller: 'UsersController',
                templateUrl: 'PartialViews/UserCreation.html'
            })
        .when('/UploadExcel',
            {
                controller: 'XLSXReaderController',
                templateUrl: 'PartialViews/UploadExcel.html'
            })
        .when('/',
            {
                //controller: 'DataUploadController',
                templateUrl: 'PartialViews/LandingPage.html'
            })
        .otherwise({ redirectTo: '/' });
});


StateProvider -- http://plnkr.co/edit/WUTPnxIKpgpDSuonGu4K?p=preview

http://stackoverflow.com/questions/22934671/do-i-use-stateprovider-or-routeprovider-for-a-single-page-app-with-log-in-sepe
https://github.com/angular-ui/ui-router/wiki/URL-Routing#urlrouterprovider

https://github.com/angular-ui/ui-router/wiki/URL-Routing#urlmatcherfactory-and-urlmatchers


*/