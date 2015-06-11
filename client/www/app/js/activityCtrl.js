(function(){
    'use strict';
     angular.module('myApp.activityCtrl',[])
     .controller('activityCtrl',['$scope','$http','$location','appFactory',activityCtrl]);
        
     //needs refactoringggg!!!!!!!
     function activityCtrl($scope,$http,$location,appFactory){
        console.log('this is the user',appFactory.user);
        $scope.idealWeight = appFactory.user.idealWeight;
        // $scope.idealWeight = 110;
    
     };

})();