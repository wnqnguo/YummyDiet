(function(){
	'use strict';
	 angular.module('myApp.ageCtrl',[])
	 .controller('ageCtrl',['$scope','$http','$location','appFactory',ageCtrl]);
	 

	 function ageCtrl($scope,$http,$location,appFactory){
	 	
	    $scope.getAge=function(item){
	    	console.log(item);
	    	appFactory.user.age = item;
	 		console.log('called age');
	 		console.log(appFactory.user);
	 		$location.path('/height');
	 	};
	
	 };

})();