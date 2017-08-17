var app = angular.module('myApp', []);
app.controller('myCntrl', function($scope,$http) {
     
     $http.get("json/data.json").success(function(response){

     	$scope.dataList = response;

     });

});

app.controller('myImgCntrl', function($scope,$http) {
     
     $http.get("json/dataImage.json").success(function(response){

     	$scope.dataList = response;

     });

});