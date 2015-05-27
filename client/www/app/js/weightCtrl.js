(function(){
	'use strict';
	 angular.module('myApp.weightCtrl',[])
	 .controller('weightCtrl',['$scope','$http','$location','appFactory',weightCtrl]);


	 function weightCtrl($scope,$http,$location,appFactory){
	 
		
	 	$scope.getWeight=function(curr,ideal){
	 		appFactory.user.curr_weight = curr;
	 		appFactory.user.ideal_weight = ideal;
	 		console.log(appFactory.user);
	 		$location.path('/activity');
	 		
	 	};
	 };
})();