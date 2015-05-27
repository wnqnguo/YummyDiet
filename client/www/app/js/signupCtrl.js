(function(){
	'use strict';
	 angular.module('myApp.signupCtrl',[])
	 .controller('signupCtrl',['$scope','$http','$location',signupCtrl]);
	 

	 function signupCtrl($scope,$location, $http){
	 	console.log('inside signupCtrl');
	    $scope.createUser=function(){
	 		console.log('called create user');


	 	};
	
	 };

})();