(function(){
    'use strict';
     angular.module('myApp.activityCtrl',[])
     .controller('activityCtrl',['$scope','$http','$location','appFactory',activityCtrl]);
        
     //needs refactoringggg!!!!!!!
     function activityCtrl($scope,$http,$location,appFactory){
        $scope.activity_lv =['sedentary',
                             'lightly active',
                             'moderately active',
                             'very active',
                             'extra active'];

        
     
        $scope.setActivity=function(item){
            console.log(item);
            appFactory.user.setActivity= item;
           // $scope.calories=BMR+BMR*convertLevel();
           // console.log($scope.calories);
            
            console.log(appFactory.user);
            $location.path('/emailSignup');
        };
        // var calculateBMR = function(){
        //     var weight=user.curr_weight;
        //     var height=convertHeight(user.height);
        //     var age=user.age;
        //     if(user.gender==='female'){
        //         return 655+4.3*user.weight+4.7*height-4.7*age;
        //     }else if(user.gender==='male'){
        //         return 655+6.3*user.weight+12.9*height-6.8*age;

        //     }

        // }
        //convert the input height into inches
        // var convertHeight = function(height){
        //     var arr=height.split("'");
        //     var foot =arr[0];
        //     var inches =foot*12+arr[1];
        //     return inches;
        // }
        // var convertLevel = function(){
        //     var multiplier;
        //     if(user.setActivity==="sedentary"){
        //         multiplier=0.2;
        //     }
        //     else if(user.setActivity==="lightly active"){
        //         multiplier=0.3;

        //     }else if(user.setActivity==="moderately active"){
        //         multiplier=0.4;

        //     }else if(user.setActivity==="very active"){
        //         multiplier=0.5;

        //     }else if(user.setActivity==="extra active"){
        //         multiplier=0.6;

        //     }
        //     return multiplier;
        // }
        // var BMR = calculateBMR();
        // $scope.test = function(){
            
        // }
        
        appFactory.user.calories=$scope.calories;
    
     };

})();