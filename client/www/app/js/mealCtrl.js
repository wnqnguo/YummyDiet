(function(){
    'use strict';
     angular.module('myApp.mealCtrl',[])
     .controller('mealCtrl',['$scope','$http','$location','appFactory',mealCtrl]);
     

     function mealCtrl($scope,$http,$location,appFactory){
        $scope.meals =[{name: 'omelet',
                        calories: 200},
                        {
                         name: 'cereal',
                         calories:300
                        },
                        {
                        name: 'oatmeal',
                        calories:150
                        }];
        $scope.selectMeal=function(item){
            console.log(item);
            appFactory.meals.breakfast = item;
            appFactory.meals.calories += item.calories;
            $scope.calorieSum = appFactory.meals.calories;
            console.log('called selectMeal');
            console.log(appFactory.meals);
            //$location.path('/height');
        };
    
     };

})();