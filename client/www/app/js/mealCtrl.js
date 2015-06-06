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
           
           // console.log('got it from the server',resp.data.list.item[0]);
            //     $scope.info = resp.data;
            //     $scope.food.name = $scope.name;
            //     console.log("all the food has the word ", resp.data.list.item[0].ndbno);
            //     $scope.food.ndbno =resp.data.list.item[0].ndbno;
            //     console.log('ndbno is '+$scope.food.ndbno);
            //     return $http({
            //         method: 'GET',
            //         url: "http://api.nal.usda.gov/ndb/reports/?ndbno="+$scope.food.ndbno+"&type=b&format=json&api_key=cUzkfSi8jXH1X8Ry4k2g3TK7S5oEqCnsYSGoQXXk"
            //     })
            //     .then(function(resp){
            //         $scope.nutrition = resp.data;
            //         console.log('nutritional information '+resp.data[0]);
                
            // $http.get('/breakfast',{name: item})
            // .success(function(data,status,header,config){
            //     console.log('sent name to server');
            // })
            // .error(function(data,status,header,config){
            //     console.log('failed');
            // });
           // var arr = ;
           var obj = JSON.parse(resp.data)
           console.log(typeof resp.data);
           console.dir(obj);


            console.log('names are',obj.list.item[0].name);
            $scope.names=[];
            
            for(var i =0; i< obj.list.item.length; i++){
                $scope.names.push(obj.list.item[i].name);
                console.log('received, response from server, data: ',$scope.names[i]);
            }
            });
                
        //  };
            // })
            // .then(function(resp){
           
              
            

            // return $http({
            //   method: 'GET',
            //   et=0&api_key=cUzkfSi8jXH1X8Ry4k2g3TK7S5oEqCnsYSGoQXXk"
            // })
            // .then(function(resp){
            //     $scope.info = resp.data;
            //     $scope.food.name = $scope.name;
            //     console.log("all the food has the word ", resp.data.list.item[0].ndbno);
            //     $scope.food.ndbno =resp.data.list.item[0].ndbno;
            //     console.log('ndbno is '+$scope.food.ndbno);
            //     return $http({
            //         method: 'GET',
            //         url: "http://api.nal.usda.gov/ndb/reports/?ndbno="+$scope.food.ndbno+"&type=b&format=json&api_key=cUzkfSi8jXH1X8Ry4k2g3TK7S5oEqCnsYSGoQXXk"
            //     })
            //     .then(function(resp){
            //         $scope.nutrition = resp.data;
            //         console.log('nutritional information '+resp.data[0]);
            //     });

              
            //   // recalculate the average rating of the artist
            
            // });
        
    };
    };

})();