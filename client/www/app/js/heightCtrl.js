(function(){
	'use strict';
	 angular.module('myApp.heightCtrl',[])
	 .controller('heightCtrl',['$scope','$http','$location','appFactory',heightCtrl]);
	 

	 function heightCtrl($scope,$http,$location,appFactory){
	 	
	    $scope.setHeight=function(item){
	    	appFactory.user.height = item;
	 		$location.path('/weight');
	 	};
	
	 };

})();