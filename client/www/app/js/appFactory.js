(function(){
    'use strict';
     angular.module('myApp.appFactory',[])
     .factory('appFactory',['$http','$location',appFactory]);
     
     function appFactory($http,$location){
        var appFactory = {};
        appFactory.user ={};
        appFactory.meals={};
        appFactory.meals.breakfast={};

        //appFactory.meals.calories = 0;
        return appFactory;
     }
    

})();