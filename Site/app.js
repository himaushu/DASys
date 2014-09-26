var app = angular.module('DASys', ['ngGrid', 'ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/AddModTemplate',
            {
                controller: 'TemplateController',
                templateUrl: 'PartialViews/AddModTemplate.html'
            })
        /*//Define a route that has a route parameter in it (:customerID)
        .when('/customerorders/:customerID',
            {
                controller: 'CustomerOrdersController',
                templateUrl: '/app/partials/customerOrders.html'
            })*/
        //Define a route that has a route parameter in it (:customerID)
        .when('/DataUpload',
            {
                controller: 'DataUploadController',
                templateUrl: 'PartialViews/DataUpload.html'
            })
        .otherwise({ redirectTo: '/AddModTemplate' });
});

