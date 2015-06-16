(function(){
    'use strict';
     angular.module('myApp.mainCtrl',[])
     .controller('mainCtrl',['$scope','$http','$location', 'appFactory',mainCtrl]);


    function mainCtrl($scope,$http,$location,appFactory){
        console.log('inside mainCtrl');
        var user={};
        $scope.signupEmail = function(){
            console.log('signing up with email');
            $location.path('/goal');
         };
        $scope.setGoal = function (item){
             appFactory.user.goal = item;
             $location.path('/genderandAge');
         };
        $scope.setGoalWeight = function(user){
            //$scope.user = {};
            console.log('inside of setGoalHeight');
           
            appFactory.user.birthday = user.birthday;
            appFactory.user.curr_Weight = user.curr_weight;
            appFactory.user.height_ft = user.height_ft;
            appFactory.user.height_inch = user.height_inch;
            appFactory.user.gender = user.gender;
           
            // var birthdate = user.birthday.toString();
           
            var time2 = new Date().getTime();
            var time1 = user.birthday.getTime();
            var age = (time2-time1)/(1000*24*3600*356);
            var weight;
            appFactory.user.age = age;
            console.log('height in foot',user.height_ft);
            console.log('height in inch',user.height_inch);
            if(user.gender==="female"){
                if(user.height_ft<5){
                    //JD Robinson's algorithm for ideal body weight
                    weight= 52-1.92(60-parseInt(user.height_ft)*12-parseInt(user.height_inch));
                    
                }else{
                    weight= 52+1.92*(parseInt(user.height_ft)*12+parseInt(user.height_inch)-60);
                    console.log('the inches',parseInt(user.height_ft)*12+parseInt(user.height_inch)-60);

                }
                
            }
            
            console.log('this is the user before redirect', appFactory.user)
            console.log('weight is',weight);
            appFactory.user.idealWeight = Math.floor(weight*2.20462);
            console.log('calculated weight', appFactory.user.idealWeight);
            $location.path('/activity');
        };
        $scope.setAge = function(item){
            appFactory.user.age = item;
            $location.path('/heightAndWeight');
        };
        $scope.setStatus = function(user){
            //console.log('inside setStatus', goal,date);
            appFactory.user.goal = user.goal;
            appFactory.user.goalDate = user.goal_date; 
            console.log(appFactory.user);
            $location.path('/stats');
        };

        
        // }
     
       
      

};
     
    
    
})();

