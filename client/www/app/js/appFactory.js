(function(){
    'use strict';
     angular.module('myApp.appFactory',[])
     .factory('appFactory',['$http','$location',appFactory]);
     
     function appFactory($http,$location){
        var appFactory = {};
        appFactory.user ={ birthday: "",
                        curr_Weight: 0,
                        height_ft: "",
                        height_inch: "",
                        gender:"",
                        goal_Weight:0,
                        daily_Cal:0,
                        remaining_Cal:0,
                        consumed_Cal:0,
                        username: "",
                        password:"",
                        email:""};
        appFactory.user.breakfast = {cal:0 , set:false};
        appFactory.user.lunch = {cal:0 , set:false};
        appFactory.user.dinner = {cal:0 , set:false};
        appFactory.user.snack = {cal:0 , set:false};

        appFactory.meals = {};
        appFactory.meals.breakfast = {};



        //appFactory.meals.calories = 0;
        return appFactory;
     }
    

})();