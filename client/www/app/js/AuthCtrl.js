(function(){
    'use strict';
     angular.module('myApp.AuthCtrl',[])
     .controller('AuthCtrl',['$scope','$timeout','$http','$location','appFactory',AuthCtrl]);


    function AuthCtrl($scope,$timeout,$http,$location,appFactory){
        console.log('this is the user now',appFactory.user);
        $scope.breakfastCal = appFactory.user.breakfast.cal;
        $scope.lunchCal = appFactory.user.lunch.cal;
        $scope.dinnerCal = appFactory.user.dinner.cal;
        $scope.snackCal = appFactory.user.snack.cal;
        $scope.currWeight = appFactory.user.curr_Weight;
        $scope.goalWeight = appFactory.user.goal_Weight;
        $scope.remainingCal = appFactory.user.daily_Cal - appFactory.user.consumed_Cal;
        $scope.consumedCal =appFactory.user.consumed_Cal;
        //set calories to 0 initially
        $scope.breakfastCal = 0;
        $scope.lunchCal = 0;
        $scope.dinnerCal = 0;
        $scope.snackCal = 0;

        $scope.$on('$stateChangeSuccess', function () {
            appFactory.user.breakfast.set = false;
            appFactory.user.lunch.set = false;
            appFactory.user.dinner.set = false;
            appFactory.user.snack.set = false;
            $scope.breakfastCal = appFactory.user.breakfast.cal;
            $scope.lunchCal = appFactory.user.lunch.cal;
            $scope.dinnerCal = appFactory.user.dinner.cal;
            $scope.snackCal = appFactory.user.snack.cal;
            console.log('dfjkhsfjkdfskfhkj');
           
        });
           $scope.data = { 'Calorie' : '0' };
    
    var timeoutId = null;
    
    $scope.$watch('lunchCal', function() {
        
        
        console.log('Has changed');
        
        if(timeoutId !== null) {
            console.log('Ignoring this movement');
            return;
        }
        
        console.log('Not going to ignore this one');
        timeoutId = $timeout( function() {
            
            console.log('It changed recently!');
            
            $timeout.cancel(timeoutId);
            timeoutId = null;
            
            // Now load data from server 
        }, 1000); 
        
        
    });
         // console.log("let's check what user current weight is", appFactory.user);
        // console.log("let's check what user breakfast is", appFactory.user.breakfast);
       




        console.log('*********************************************');
        $scope.test ='hiiiiii';
        $scope.obj ={cal: 0};

        
        $scope.currentWeight = appFactory.user.curr_Weight;
      
        $scope.recommended_cal = appFactory.user.recommanded_cal;
       
    
        
        $scope.signup = function(user){

           appFactory.user.daily_Cal = user.cal;
            console.log('this is the daily cal',user.cal);
            console.log('this is the user',appFactory.user);
            $location.path('/signupForm');
         };
         // redirect to the page for email or facebook login
         $scope.login= function(){
            console.log('called login');
            $location.path('/login');
         };
         //
       
         //send post request with facebook info
        $scope.loginFacebook = function(){
            $location.path('/login');
         }
        $scope.loginEmail = function(){
            $location.path('/emailLogin');
         }
    $scope.test = function (){
        console.log('!jimmyyyyy is amainzgggg');
        $scope.breakfastCal =  appFactory.meals.cal;
    }
     $scope.postUserInfo=function(user){
        appFactory.user.password = user.password;
        appFactory.user.email = user.email;
        appFactory.user.username = user.username;
        console.log('this is the user after signup', appFactory.user);
        $location.path('/profile');
        console.log('called singup');
        // appFactory.user.email = email ;
        // appFactory.user.password = password;
        // var user = appFactory.user;
        // console.log('ready to add user to databse', appFactory.user);
       
        // $http.post('/emailSignup',user)
        //     .success(function(data,status,header,config){
        //         console.log('send to server, inside client');
        //         $scope.email = email;
        //         $location.path('/profile');
        //     }).error(function(data,status,header,config){
        //         $location.path('/home');
        //         console.log('after redirect');
        //         console.log('faihjkhkjhled');

        //});
       
     };
     $scope.LoginwithEmail = function (email,password){
       
        
        var user = appFactory.user;
        $scope.email = user.email;
        $scope.password = user.password;
        $scope.age = user.age;

        $http.post('/emailLogin',user).success(function(data,status,header,config){
            console.log('receiving server');
            console.log('scope.email is : ',$scope.email);
            // $scope.email =  appFactory.user.email;
            $location.path('/profile');

        }).error(function(data,status,header,config){
            console.log('failed');
            $location.path('/home');
        });
    };   
    $scope.searchMeal = function(index){
        
        switch(index){
            case 0:
                appFactory.user.breakfast.set = true;
                break;
            case 1:
                appFactory.user.breakfast.set = true;
                break;
            case 2:
                appFactory.user.breakfast.set = true;
                break;
            case 3:
                appFactory.user.breakfast.set = true;
                break;
            



        }
        console.log('is breakfast true??',index);
        console.log('called breakfast()');
    $location.path('/breakfast');
    };
        $scope.setCalorieBudget = function (user){
            appFactory.user.goal_weight = user.goalWeight;
            console.log('this is the user after setting goalWeight',appFactory.user);
            $location.path('/signupForm');
        }

     
   }; 

})();