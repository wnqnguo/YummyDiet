(function(){
	'use strict';
	 angular.module('myApp.signupCtrl',[])
	 .controller('signupCtrl',['$scope','$http','$location',signupCtrl]);


	function signupCtrl($scope,$location){
	 	console.log('inside signupCtrl');
	 $scope.submit=function(){
	 	console.log('called submit');
	 	$location.path('/localAuth');
	 };
	 
	 //console.log(username);
	 	console.log('inside signup controllerrrrr');
	 };

})();