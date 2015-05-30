var mongoose = require('mongoose'),
	User = require('./userModel.js'),
	Q    = require('q');

module.exports = {
	//for now just try to create a new user and log it out in the console
	// then save it to the database
	//save it to the database 
	name: function(request,response,next){
		var res = JSON.stringify(request.body);
		//var create = Q.nbind(User.create, User);
		//var findUser = Q.nbind(User.findOne, User);
	//check to see if the user already exists in the databse
	// User.findOne({username:request.body},function(err,data){
	// 	if(err){
			
	// 	}
	// });
	User.create(request.body,function(err,data){
		if(err){
			console.log(err)
			return response.send(err);
		}else{
			console.log(data);
			//return response.json(data);
			response.send(data);
		}

	});
	// User.find({},function(req,res){

	//  });



	// create(request.body)
	// .then(function(user){
	// 	console.log('created a new user :'+user.username);
	// 	response.send(user);
	// });
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
 		console.log('outside of for loop'+res);
 		// response.send('hiiiii');
 		//response.send(request.body);
  	
	 },
	 fetch:function(request,response){
	 	var req = JSON.stringify(request.body);
		console.log(req); 
	 	response.send('created a new user');
	 }
	
	
};