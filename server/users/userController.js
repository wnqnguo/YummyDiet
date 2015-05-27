// var mongoose = require('mongoose');
// var User = mongoose.model('User');

module.exports = {
	//for now just try to create a new user and log it out in the console
	// then save it to the database
	//save it to the database 
	name: function(request,response){
		var res = JSON.stringify(request.body)
		//var user = new User
		//{'username':'Faye'}
  		console.log('received client call' + res);
  		response.send(res);
	}
	
};