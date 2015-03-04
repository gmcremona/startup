 myApp.controller('MainCtrl', ['$scope', 'Server', function($scope, Server) {
     var jsonGet = 'http://localhost:8000/api/movies/';

     Server.get(jsonGet)
         .success(function(data) {
             $scope.movies = data;
             for (var i = data.length - 1; i >= 0; i--) {
                localStorage.setItem(data[i]._id, data[i]);
            };
         });
     //Server.post(jsonPost);
 }]);

 myApp.controller('EditCtrl', ['$scope', 'Server', '$routeParams','$location',function($scope, Server, $routeParams,$location) {

     var jsonGet = 'http://localhost:8000/api/movies/' + $routeParams.id;

     $scope.deleteMovie = function() {
       	
        Server.delete(jsonGet)
        .success(function(){
            localStorage.removeItem($routeParams.id);
        	$location.path( "/" );
        }); 
     };


     Server.get(jsonGet)
         .success(function(data) {
             $scope.title = data.title;
             $scope.year = data.year;
             $scope.director = data.director;
             $scope.genre = data.genre;
             $scope.plot = data.plot;
             $scope.stars = data.stars;
             $scope.id = data._id;
         });

    $scope.addMovie = function(){
    	var req = {
             method: 'PUT',
             url: jsonGet,
             headers: {
                 'Content-Type': 'application/json'
             },
             data: {
                 title: $scope.title,
                 year: $scope.year,
                 director: $scope.director,
                 genre: $scope.genre,
                 plot: $scope.plot,
                 stars: $scope.stars
             }
         }
         Server.post(req)
             .success(function() {
                 $location.path( "/" );
             })
     
    }
 }]);


 myApp.controller('NewCtrl', ['$scope', 'Server', '$location' ,function($scope, Server, $location) {

 	
     
     $scope.addMovie = function() {
         var req = {
             method: 'POST',
             url: 'http://localhost:8000/api/movies/',
             headers: {
                 'Content-Type': 'application/json'
             },
             data: {
                 title: $scope.title,
                 year: $scope.year,
                 director: $scope.director,
                 genre: $scope.genre,
                 plot: $scope.plot,
                 stars: $scope.stars
             }
         }
          Server.post(req)
             .success(function() {
                 $location.path( "/" );
             })
     

     }


 }]);
