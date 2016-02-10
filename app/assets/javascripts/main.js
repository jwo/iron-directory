angular.module("ironDirectory", []).

controller("staffController", ["$scope", "$http", function($scope, $http) {
  $scope.sort    = "last_name"
  $scope.reverse = false
  $scope.filter  = ""

  $scope.title_for = function(member) {
    return member.title
  }

  $scope.toggleSort = function(field) {
    if ($scope.sort == field) {
      $scope.reverse = !$scope.reverse
    } else {
      $scope.sort = field
      $scope.reverse = false
    }
  }

  var url = window.location.origin + window.location.pathname
  $http.get(url + ".json").success(function(data) {
    $scope.members = data.staff
  })
}])
