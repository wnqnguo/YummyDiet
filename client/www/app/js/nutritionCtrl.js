(function(){
    'use strict';
     angular.module('myApp.nutritionCtrl',[])
     .controller('nutritionCtrl',['$scope','$http','$location','appFactory',nutritionCtrl]);
     

      function nutritionCtrl($scope,$http,$location,appFactory){
        $scope.food = appFactory.meals.breakfast;
        console.log('hiiiii',appFactory);
       
    };

})();