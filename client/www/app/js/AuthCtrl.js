(function(){
    'use strict';
     angular.module('myApp.AuthCtrl',[])
     .controller('AuthCtrl',['$scope','$http','$location','appFactory',AuthCtrl]);


    function AuthCtrl($scope,$http,$location,appFactory){

       
        
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
        $scope.signupEmail = function(){
            console.log('signing up with email');
            $location.path('/goal');
         };
         //send post request with facebook info
        $scope.loginFacebook = function(){
            $location.path('/login');
         }
        $scope.loginEmail = function(){
            $location.path('/emailLogin');
         }
       
     $scope.postUserInfo=function(email,password){

        console.log('called singup');
        appFactory.user.email = email ;
        appFactory.user.password = password;
        var user = appFactory.user;
        console.log('ready to add user to databse', appFactory.user);
        // send email and password to server as an object
        $http.post('/emailSignup',user)
            .success(function(data,status,header,config){
                console.log('send to server, inside client');
                $scope.email = email;
                $location.path('/profile');
            }).error(function(data,status,header,config){
                $location.path('/home');
                console.log('after redirect');
                console.log('faihjkhkjhled');

            });
        //$location.path('/name');
     };
     $scope.LoginwithEmail = function (email,password){
       
        ;
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
        $scope.breakfast = function(){
        console.log('called breakfast()');
        $location.path('/breakfast');
        };
     
   }; 

})();