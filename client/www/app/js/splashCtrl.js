(function(){
	'use strict';
	 angular.module('myApp.splashCtrl',[]).controller('splashCtrl',['$scope','$http','$location',splashCtrl]);


	 function splashCtrl($scope,$http,$location){
	 
		//console.log('inside splashctrl');
	 	$scope.signup=function(){
	 		console.log('inside signup');
	 		$location.path('/signup');
	 		
	 	};
	 };
})();


