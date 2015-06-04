(function(){
    'use strict';
     angular.module('myApp.mainCtrl',[])
     .controller('mainCtrl',['$scope','$http','$location', 'appFactory',mainCtrl]);


    function mainCtrl($scope,$http,$location,appFactory){
        console.log('inside mainCtrl');
        var user={};
        $scope.showMenu = false;

         //console.log(username);
         //console.log('inside signup controllerrrrr');
         $scope.goals = ['Lose Weight', 'Maintain Weight','Gain Weight'];
         $scope.setGoal = function (item){
             appFactory.user.goal = item;
             $location.path('/genderandAge');

         }
        // $scope.setName=function(item){
        //     appFactory.user.username=item;
        //     var user = appFactory.user;
        //     $http.post('/name',user)
        //         .success(function(data,status,header,config){
        //             console.log('sent name to server');
        //         })
        //         .error(function(data,status,header,config){
        //             console.log('failed');
        //         });
        //         $location.path('/gender');
                
        //  };
        $scope.setMale = function(){
            appFactory.user.gender='male';
            $location.path('/age');
        };
        $scope.setFemale = function(){
            console.log('called female');
            appFactory.user.gender='female';
            console.log(appFactory);
        };
   
    
        $scope.setWeightHeight=function(height,weight){
            appFactory.user.height = height;
            appFactory.user.weight = weight;
            $location.path('/activity');
        };
        $scope.setAge = function(item){
            appFactory.user.age = item;
            $location.path('/heightAndWeight');
        };
      

};
     
    
    
})();