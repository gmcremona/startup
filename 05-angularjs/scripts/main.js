 var myApp = angular.module('myApp', ['ngRoute']);


 myApp.config(['$routeProvider', function($routeProvider) {

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
     /* myApp.run(function($templateCache) {
          $templateCache.put('templateId.html', 'This is the content of the template');
      });
      $templateCache.get('templateId.html')*/
 }]);



