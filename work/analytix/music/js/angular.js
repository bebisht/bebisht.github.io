var app = angular.module('myApp', []);
app.controller('myCntrl', function($scope, $http) {
    $http.get("data.json").success(function(response) {
        $scope.myData = response;
    });
});