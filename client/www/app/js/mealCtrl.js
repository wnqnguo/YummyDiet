(function(){
    'use strict';
     angular.module('myApp.mealCtrl',[])
     .controller('mealCtrl',['$scope','$window','$http','$location','appFactory',mealCtrl]);
     

     function mealCtrl($scope,$window,$http,$location,appFactory){

        
        
        
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
            appFactory.meals.breakfast.type=item;
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
            $scope.ndbnos=[];
            $scope.names=[];
            $scope.lookup;
                        
            for(var i =0; i< obj.list.item.length; i++){
                $scope.names.push(obj.list.item[i].name);
                $scope.ndbnos.push(obj.list.item[i].ndbno);
                console.log('received, response from server, data: ',$scope.names[i]);
            }
            });

        
        };
        $scope.obj={};
        $scope.obj.food="";
        $scope.getNutrition = function(item){
            appFactory.meals.breakfast.name=item;
            var index = $scope.names.indexOf(item);
           
            appFactory.meals.breakfast.ndbno=$scope.ndbnos[index];
            console.log('the number is ',$scope.ndbnos[index]);
            console.log('inside of getNutrition');
            console.log('hiiiii',appFactory.meals);
            $scope.obj.food = item;
            
            $scope.test ="hii";
             return $http({
              method: 'GET',
              url: '/nutrition',
              params: {ndbno: $scope.ndbnos[index]}
              //data: $scope.food.name
            })
            .then(function(resp){
                var obj = JSON.parse(resp.data);
                console.log(typeof resp.data);
                console.dir(obj);
                appFactory.meals.breakfast.nutrients = obj.report.foods[0].nutrients;
                var nutrients = appFactory.meals.breakfast.nutrients;
                // window.locationStorage['nutrients'] = appFactory.meals.breakfast.nutrients;
                $window.localStorage['name']='Max';
                console.log($window.localStorage['name']);
                console.log('stwtiching to nutrition');
                 $location.path('/nutrition');
                console.log('nutrition information',obj.report.foods[0]);

            });
            
            
        }
    };

})();