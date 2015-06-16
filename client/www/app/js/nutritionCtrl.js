(function(){
    'use strict';
     angular.module('myApp.nutritionCtrl',[])
     .controller('nutritionCtrl',['$scope','$http','$location','appFactory',nutritionCtrl]);
     

      function nutritionCtrl($scope,$http,$location,appFactory){
        $scope.food = appFactory.user.breakfast.breakfast;
        console.log('hiiiii',appFactory.user.breakfast.ndbno);
        console.log('nutrition info',appFactory.user.breakfast.nutrients);
        $scope.name = appFactory.user.breakfast.name;
        $scope.nutrients = appFactory.user.breakfast.nutrients;
        $scope.serving_size = appFactory.user.breakfast.measure;
       
        appFactory.user.breakfast.cal = $scope.nutrients[3].value; 
        appFactory.user.consumed_Cal = appFactory.user.breakfast.cal;
        console.log("let's check which meal the user is setting", appFactory.user);
        console.log('cal value',$scope.nutrients[3].value);
        if(appFactory.user.breakfast.set === true){
            console.log('setting breakfast');
            appFactory.user.breakfast.cal = $scope.nutrients[3].value;
        }else if(appFactory.user.lunch.set === true){
            console.log('setting lunch');
            appFactory.user.lunch.cal = $scope.nutrients[3].value;
            console.log('setting dinner');
        }else if (appFactory.user.dinner.set === true){
            appFactory.user.dinner.cal = $scope.nutrients[3].value;
        }else if(appFactory.user.snack.set === true){
            console.log('setting snack');
            appFactory.user.snack.cal = $scope.nutrients[3].value;
        }
        appFactory.user.breakfast.set = false;
        appFactory.user.lunch.set = false;
        appFactory.user.dinner.set = false;
        appFactory.user.snack.set = false;

         $scope.SetCalorie = function(){
            console.log('called set calorie');
        $location.path('/profile');
       }

       };
       

})();