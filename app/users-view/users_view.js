'use strict';

angular.module('myApp.usersView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {

  $routeProvider.when('/users', {
    templateUrl: 'users-view/users_view.html',
    controller: 'usersViewCtrl'
  });

}])

.controller('usersViewCtrl', ['$scope', 'userService', function($scope, userService) {

  userService.getUsers().then(function(response) {
    $scope.users = response.data;
  });

  $scope.firstNameFilter = function(user){
    return (user.first_name.indexOf($scope.filterText) > -1 || !$scope.filterText);
  };

}]);