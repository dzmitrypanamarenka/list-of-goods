module.directive('coffeeDir', function(){
  return {
    link: function(scope, el, attr){
      scope.$watch(attr["coffeeDir"], function(newVal){
        scope.data = newVal;
        
      });
      
    },
    templateUrl: "template/template.html",
  };
})
.directive("testDir", function($compile){
  return {
    link: function ($scope, element){
      $scope.hide = true;
      $scope.moreInf = function(e){
        var target = e.target.parentNode.parentNode;
        target.classList.toggle("more");
        target.classList.toggle("flex-30");
        
        if($scope.hide){
            $scope.hide = false;
          } else {
            $scope.hide = true;
          }
      };
    },
}})
  
