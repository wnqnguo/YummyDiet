(function(){
    'use strict';
     angular.module('myApp.nutritionCtrl',[])
     .controller('nutritionCtrl',['$scope','$http','$location','appFactory',nutritionCtrl]);
     

      function nutritionCtrl($scope,$http,$location,appFactory){
        $scope.food = appFactory.meals.breakfast;
        console.log('hiiiii',appFactory.meals.breakfast.ndbno);
        console.log('nutrition info',appFactory.meals.breakfast.nutrients);
        $scope.name = appFactory.meals.breakfast.name;
        $scope.nutrients = appFactory.meals.breakfast.nutrients;
        $scope.serving_size = appFactory.meals.breakfast.measure;

       
       
    };

})();