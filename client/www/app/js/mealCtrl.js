(function(){
    'use strict';
     angular.module('myApp.mealCtrl',[])
     .controller('mealCtrl',['$scope','$window','$http','$location','appFactory',mealCtrl]);
     

     function mealCtrl($scope,$window,$http,$location,appFactory){

        //set 
        // appFactory.meals.breakfast.name = "";
         $scope.food={};
         console.log('in side of mealCtrl');
        
        $scope.selectMeal=function(item){

            console.log(item);
            appFactory.meals.breakfast = item;
            //appFactory.meals.breakfast = item;
            $scope.calorieSum = appFactory.meals.calories;

            console.log('called selectMeal');
            console.log(appFactory.meals);
            //$location.path('/height');
        };
        $scope.search = function(item){
            //$scope.breakfastCal = 
            $scope.items=[];
            $scope.food.name = item;
            $scope.names = [];
            //appFactory.user.breakfast.type=item;
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

            appFactory.user.breakfast.name=item;
            var index = $scope.names.indexOf(item);
            console.log('called get nutrition');
           
            appFactory.user.breakfast.ndbno=$scope.ndbnos[index];
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
                appFactory.user.breakfast.nutrients = obj.report.foods[0].nutrients;
                var nutrients =  appFactory.user.breakfast.nutrients;
                // window.locationStorage['nutrients'] = appFactory.meals.breakfast.nutrients;
                //$window.localStorage['name']='Max';
                console.log($window.localStorage['name']);
                console.log('stwtiching to nutrition');
                console.log('nutrition information',obj.report.foods[0]);
                 $location.path('/nutrition');
                

            });
            
            
        }



    };

})();