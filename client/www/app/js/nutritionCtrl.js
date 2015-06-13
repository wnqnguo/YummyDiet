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
        $scope.$on('$stateChangeSuccess', function () {
            console.log('inside nutritionnnnnnnnnnn');
            appFactory.obj.breakfastCal = $scope.nutrients[3].value ;
            console.log('new cal',appFactory.obj.breakfastCal );
        });
        appFactory.meals.cal = $scope.nutrients[3].value; 
        console.log('cal value',$scope.nutrients[3].value);

         

         $scope.SetBreakfast = function(){

            $location.path('/profile');
            
            
            console.log('scope variable after redirecting',$scope);
         }

       };

})();