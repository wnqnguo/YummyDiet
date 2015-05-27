(function(){
	'use strict';
	 angular.module('myApp.summaryCtrl',[])
	 .controller('summaryCtrl',['$scope','$http','$location','appFactory',summaryCtrl]);


	 function summaryCtrl($scope,$http,$location,appFactory){
	 
		var age = appFactory.user.age;
		var gender= appFactory.user.age;
		var ideal = appFactory.user.age;;
		var curr = appFactory.user.age;
	 	
	 	$scope.calorie = 2000;
	 	$scope.showBreakfast = function(){
	 		$location.path('/breakfast');
	 	}
	 };
})();