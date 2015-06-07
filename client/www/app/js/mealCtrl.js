(function(){
    'use strict';
     angular.module('myApp.mealCtrl',[])
     .controller('mealCtrl',['$scope','$http','$location','appFactory',mealCtrl]);
     

     function mealCtrl($scope,$http,$location,appFactory){

        $scope.meals =[{name: 'omelet',calories: 200},{name: 'cereal',calories:300},
        
        {name: 'oatmeal',calories:150},{name: 'blueberry muffin',calories:250},{
         name: ''   
        }];
        $scope.food = {};
        $scope.selectMeal=function(item){

            console.log(item);
            appFactory.meals.breakfast = item;
            appFactory.meals.calories += item.calories;
            $scope.calorieSum = appFactory.meals.calories;

            console.log('called selectMeal');
            console.log(appFactory.meals);
            //$location.path('/height');
        };
        $scope.search = function(item){
            $scope.items=[];
            $scope.food.name = item;
            $scope.names = [];
           // console.log(item);
            return $http({
              method: 'GET',
              url: '/breakfast',
              params: {name: item}
              //data: $scope.food.name
           })
            .then(function(resp){

           var obj = JSON.parse(resp.data);
           console.log(typeof resp.data);
           console.dir(obj);


            console.log('names are',obj.list.item[0].name);
            $scope.names=[];
            
            for(var i =0; i< obj.list.item.length; i++){
                $scope.names.push(obj.list.item[i].name);
                console.log('received, response from server, data: ',$scope.names[i]);
            }
            });

        
        };
        $scope.obj={};
        $scope.obj.food="";
        $scope.getNutrition = function(item){
            appFactory.meals.breakfast = item;
            console.log('hiiiii',appFactory.meals);
            $scope.obj.food = item;
           
            $scope.test ="hii";
            $location.path('/nutrition');
            
            console.log('hiiiiii');
            console.log('sdfsfd',$scope.obj.food);
           
           
            console.log(item);
        }
    };

})();