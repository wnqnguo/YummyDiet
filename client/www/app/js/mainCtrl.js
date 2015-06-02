(function(){
	'use strict';
	 angular.module('myApp.mainCtrl',[])
	 .controller('mainCtrl',['$scope','$http','$location',mainCtrl]);


	function mainCtrl($scope,$http,$location){
	 	console.log('inside mainCtrl');
	 $scope.signup = function(){
	 	console.log('called singup');
	 	$location.path('/signup');
	 };
	 $scope.signupEmail = function(){
	 	console.log('signing up with email');
	 	$location.path('/localAuth');
	 };
	 $scope.loginFacebook = function(){
	 	$location.path('/login');
	 }
	 $scope.loginEmail = function () {
	 	$location.path('/emailLogin');
	 }
	 //console.log(username);
	 //console.log('inside signup controllerrrrr');
	
	};
})();