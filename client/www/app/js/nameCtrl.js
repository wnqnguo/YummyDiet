(function(){
	'use strict';
	 angular.module('myApp.nameCtrl',[])
	 .controller('nameCtrl',['$scope','$http','$location','appFactory',nameCtrl]);
	 

	 function nameCtrl($scope,$http,$location,appFactory){
	 		//$scope.user_name='';
	    $scope.setName=function(item){
	    	console.log(appFactory);

	    	appFactory.user.username=item;
	        var user = appFactory.user;
	    	
	 		$http.post('/name',user)
	 		.success(function(data){
	 			console.log('this is coming from express server :' + data);
	 		})
	 		.error(function(data,status,header,config){
	 			console.log('failed');
	 		});
	 		//console.log(item);
	 		$location.path('/gender');
	 		//if(!$rootScope.$$path) $rootScope.$apply();
	 	};
	
	 };

})();