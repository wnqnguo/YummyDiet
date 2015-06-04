(function(){
    'use strict';
     angular.module('myApp.splashCtrl',[])
     .controller('splashCtrl',['$scope','$http','$location',splashCtrl]);


     function splashCtrl($scope,$http,$location){
     
        
        $scope.signup=function(){
            
            console.log('calling signup');
            console.log($location);
            console.log('after location');
            $location.path('/signup');
            
        };
     };
})();


