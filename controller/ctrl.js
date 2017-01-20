module.controller('AppCtrl', function($scope, $http) {
  $http.get('coffee.json').then(function(data){
    
    $scope.coffee = data.data;
    console.log($scope.coffee);
  });
})
