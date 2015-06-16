(function(){
    'use strict';
     angular.module('myApp.activityCtrl',[])
     .controller('activityCtrl',['$scope','$http','$location','appFactory',activityCtrl]);
        
     //needs refactoringggg!!!!!!!
     function activityCtrl($scope,$http,$location,appFactory){
        console.log('this is the user',appFactory.user);
        $scope.idealWeight = appFactory.user.idealWeight;
        // $scope.idealWeight = 110;
           $scope.setCalorieBudget = function(user){
            //Harris-Benedict Equation
            'use strict';
            var height = (parseInt(appFactory.user.height_ft)*5+parseInt(appFactory.user.height_inch))*2.54;
            var weight = Math.floor(parseInt(appFactory.user.curr_weight)*0.453592);
            var age = appFactory.user.age;
             if(appFactory.user.gender==="female"){
                appFactory.user.recommended_cal = ( 655.1 + 9.6 *weight + 1.9*height - 4.7*age )*1.2;
             }else{
                appFactory.user.recommanded_cal = ( 66.5 + 13.8 *weight + 5 *height - 6.8 *age )*1.2;
             }
             console.log(appFactory.user.recommanded_cal);
             appFactory.user.goal_Weight = user.goalWeight;
             $location.path('/CalorieBudget');
        };
    
     };

})();