(function(){
    'use strict';
     angular.module('myApp.AuthCtrl',[])
     .controller('AuthCtrl',['$scope','$http','$location','appFactory',AuthCtrl]);


    function AuthCtrl($scope,$http,$location,appFactory){
        $scope.$on('$stateChangeSuccess', function () {
            console.log('dfjkhsfjkdfskfhkj');
            $scope.breakfastCal =  appFactory.meals.cal;
        });
        console.log('*********************************************');
        $scope.test ='hiiiiii';
        $scope.obj ={cal: 0};

        // $scope.obj.cal=  appFactory.meals.cal;
        console.log('calorie',$scope.breakfastCal);
        $scope.currentWeight = appFactory.user.curr_weight;
        console.log('inside AuthCtrl',appFactory.obj.breakfastCal );
        $scope.recommended_cal = appFactory.user.recommanded_cal;
        // $scope.breakfastCal =  appFactory.meals.cal;
        console.log('inside AuthCtrl', appFactory.meals.breakfast.cal);
        //$scope.breakfastCal =  200;
        
        $scope.signup = function(){
            appFactory.user = {};
            console.log('called singup');
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
     $scope.postUserInfo=function(){
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
    $scope.searchBreakfast = function(){
    console.log('called breakfast()');
    $location.path('/breakfast');
    };

    // $scope.food = appFactory.meals.breakfast;
    // console.log('hiiiii',appFactory.meals.breakfast.ndbno);
    // console.log('nutrition info',appFactory.meals.breakfast.nutrients);
    // $scope.name = appFactory.meals.breakfast.name;
    // $scope.nutrients = appFactory.meals.breakfast.nutrients;
    // $scope.serving_size = appFactory.meals.breakfast.measure;
    // appFactory.meals.cal = $scope.nutrients[3].value; 
    // console.log('cal value',$scope.nutrients[3].value);

     
   }; 

})();