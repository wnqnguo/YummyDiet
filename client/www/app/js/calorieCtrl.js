(function(){
    'use strict';
     angular.module('myApp.calorieCtrl',[])
     .controller('nutritionCtrl',['$scope','$http','$location','appFactory',calorieCtrl]);
     

      function calorieCtrl($scope,$http,$location,appFactory){
       
       console.log("let's check what user breakfast is", appFactory.user.breakfast);
        $scope.breakfastCal = appFactory.user.breakfast.cal;

        $scope.lunchCal = appFactory.user.lunch.cal;
        $scope.dinnerCal = appFactory.user.dinner.cal;
        $scope.snackCal = appFactory.user.snack.cal;
        $scope.currWeight = appFactory.user.curr_Weight;
        $scope.goalWeight = appFactory.user.goal_Weight;
        $scope.remainingCal = appFactory.user.remaining_Cal;
        $scope.consumedCal = appFactory.user.consumed_Cal;
        //set calories to 0 initially
        $scope.breakfastCal = 0;
        $scope.lunchCal = 0;
        $scope.dinnerCal = 0;
        $scope.snackCal = 0;

       };

})();