var mongoose = require('mongoose'),
	User = require('./userModel.js'),
	Q    = require('q');

module.exports = {
	//for now just try to create a new user and log it out in the console
	// then save it to the database
	//save it to the database 
	name: function(request,response,next){
	var res = JSON.stringify(request.body);
	var create = Q.nbind(User.create, User);
	var findUser = Q.nbind(User.findOne, User);
	var newUser ={username: 'fayeTest'}	;

	create(newUser)
	.then(function(user){
		console.log('created a new user :'+user.username);
		response.send('created a new user');
	})
	// .then(function(user){
	// 	findUser(user)
	// 	.then(function(user){
	// 		if(!user){
	// 			next(new Error('User does not exist'));;
	// 		}else{
	// 			response.send('found user');
	// 		}
	// 	});
	// });
	// 	//{'username':'Faye'}
 //  	console.log('received client call' + res);
 		response.send('got itttt');
  	
	 },
	 fetch:function(request,response){
		console.log('get request to server');
	 	response.send('created a new user');
	 }
	
	
};