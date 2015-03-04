 var myApp = angular.module('myApp', ['ngRoute']); 


 myApp.config(['$routeProvider', function($routeProvider) { //configuro las rutas

     /**
      * $routeProvider
      */
     $routeProvider
         .when('/', { 
             templateUrl: 'views/main.html',
             controller: 'MainCtrl'
         })
         .when('/edit/:id', {
             templateUrl: 'views/edit.html',
             controller: 'EditCtrl'
         })
         .when('/new', {

             templateUrl: 'views/edit.html',
             controller: 'NewCtrl'
         })
         .otherwise({
             redirectTo: '/'
         });
 }]);



