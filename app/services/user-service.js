angular.module('myApp').service('userService', ['$q', '$http', function($q, $http){

  function getUsers(){
    var deferred = $q.defer();

    $http.get('https://mockaroo.com/e7995d70/download?count=50&key=015777f0')
      .then(function(data) {
        deferred.resolve(data);
      }, function(error){
        deferred.reject(error);
      });

    return deferred.promise
  }

  return {
    getUsers: getUsers
  }

}]);