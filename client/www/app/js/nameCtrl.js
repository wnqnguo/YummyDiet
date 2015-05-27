(function(){
	'use strict';
	 angular.module('myApp.nameCtrl',[])
	 .controller('nameCtrl',['$scope','$http','$location','appFactory',nameCtrl]);
	 

	 function nameCtrl($scope,$http,$location,appFactory){
	 		//$scope.user_name='';
	    $scope.getName=function(item){
	    	console.log(appFactory);
	    	appFactory.user.username=item;
	 		
	 		//console.log(item);
	 		$location.path('/gender');
	 		//if(!$rootScope.$$path) $rootScope.$apply();
	 	};
	
	 };

})();