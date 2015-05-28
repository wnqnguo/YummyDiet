(function(){
	'use strict';
	 angular.module('myApp.genderCtrl',[])
	 .controller('genderCtrl',['$scope','$http','$location','appFactory',genderCtrl]);
	 

	 function genderCtrl($scope,$http,$location,appFactory){
	 	
	    $scope.setMale = function(){
	 		appFactory.user.gender='male';
	 		console.log(appFactory);
	 		$location.path('/age');
	 	};
	 	$scope.setFemale=function(){
	 		console.log('called female');
	 		appFactory.user.gender='female';
	 		console.log(appFactory);
	 		$location.path('/age');
	 	};
	 	$scope.getData = function(){
	 		console.log('called get data');
	 		$http.get('/gender')
	 		.success(function(data,status,header,config){
	 			console.log('getting data from server:');
	 		})
	 		.error(function(data,status,header,config){
	 			console.log('failed');	
	 		});
	 	}
	 	
	
	 };

})();