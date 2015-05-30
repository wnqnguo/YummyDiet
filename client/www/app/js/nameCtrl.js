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
	 		.success(function(data,status,header,config){
	 			var temp1 = JSON.stringify(data[0]);
	 			var temp2 = JSON.stringify(data[1]);
	 			var temp = JSON.stringify(data);
	 			console.log('this is the status '+ status);
	 			console.log('this is coming from express server temp1 :' + temp1);
	 			console.log('this is coming from express server temp2 :' + temp2);
	 			console.log('trying to console log data '+ temp);
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