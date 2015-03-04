 myApp.factory('Server', ['$http', function($http) {
     return {
         get: function(url) {
             return $http.get(url);
         },
         post: function(req) {
             return $http(req);
         },
         delete: function(url) {
             return $http.delete(url);
         },
     };
 }]);

