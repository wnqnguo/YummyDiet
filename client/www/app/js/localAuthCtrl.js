(function(){
	'use strict';
	 angular.module('myApp.localAuthCtrl',[])
	 .controller('localAuthCtrl',['$scope','$http','$location',localAuthCtrl]);


	function localAuthCtrl($scope,$http,$location){
		//$scope.email='';
	 	console.log('inside localAuthCtrl');
	 $scope.postUserInfo=function(email,password){
	 	console.log('called singup');
	 	var user = { email: email, password: password};
	 	// send email and password to server as an object
	 	$http.post('/signup',user)
	 		.success(function(data,status,header,config){
	 			console.log('send to server, inside client');
	 			$location.path('/name');
	 			// var temp1 = JSON.stringify(data[0]);
	 			// var temp2 = JSON.stringify(data[1]);
	 			// var temp = JSON.stringify(data);
	 			// console.log('this is the status '+ status);
	 			// console.log('this is coming from express server temp1 :' + temp1);
	 			// console.log('this is coming from express server temp2 :' + temp2);
	 			// console.log('trying to console log data '+ temp);
	 		})
	 		.error(function(data,status,header,config){
	 			console.log('failed');
	 		});
	 	//$location.path('/name');
	 };
	 
	 //console.log(username);
	 	console.log('inside signup controllerrrrr');
	 };

})();