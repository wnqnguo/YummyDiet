(function(){
	'use strict';
	 angular.module('myApp.localAuthCtrl',[])
	 .controller('localAuthCtrl',['$scope','$http','$location',localAuthCtrl]);


	function localAuthCtrl($scope,$http,$location){
		$scope.email='';
	 	console.log('inside localAuthCtrl');
	 $scope.postUserInfo=function(){
	 	console.log('called singup');
	 	$location.path('/name');
	 };
	 
	 //console.log(username);
	 	console.log('inside signup controllerrrrr');
	 };

})();