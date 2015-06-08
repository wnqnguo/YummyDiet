(function(){
    'use strict';
     angular.module('myApp.nutritionCtrl',[])
     .controller('nutritionCtrl',['$scope','$http','$location','appFactory',nutritionCtrl]);
     

      function nutritionCtrl($scope,$http,$location,appFactory){
        //  var currentStart = 0;
        // $scope.items = [];
        $scope.food = appFactory.meals.breakfast;
        console.log('hiiiii',appFactory.meals.breakfast.ndbno);
        console.log('nutrition info',appFactory.meals.breakfast.nutrients);
        $scope.name = appFactory.meals.breakfast.name;
        $scope.nutrients = appFactory.meals.breakfast.nutrients;
        $scope.serving_size = appFactory.meals.breakfast.measure;

      //   $scope.addItems = function() {
      //   for (var i = currentStart; i < currentStart+20; i++) {
      //     $scope.items.push("Item " + i)
      //   }

      //   currentStart += 20
      // }

       //$scope.addItems()
       // console.log(nutrients);

       
       
    };

})();


/*
My status
Home/Search
Profile
Nutrition
*/