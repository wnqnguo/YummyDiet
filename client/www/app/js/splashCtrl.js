// (function(){
// 	'use strict';
// 	 angular.module('myApp').controller('splashCtrl',['$scope','$http','$location',splashCtrl]);


// 	 function splashCtrl($scope,$http,$location){
	 
// 		//console.log('inside splashctrl');
// 	 	$scope.signup=function(){
// 	 		console.log('inside signup');
// 	 		$location.path('/signup');
	 		
// 	 	};
// 	 };
// })();

angular.module('myApp.controllers').controller('splashCtrl',[$scope,$http,$location,function($scope,$http,$location){
	$scope.signup=function(){
	 		console.log('inside signup');
	 		$location.path('/signup');
	 		
	 	};

}]);
