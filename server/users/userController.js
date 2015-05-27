var User = require('./userModel.js'),
    Q    = require('q');
module.exports{
	//for now just try to create a new user and log it out in the console
	// then save it to the database
	save it to the database 
	signup: function (req,res,next){
		var username = req.body.username;
		var findOne = Q.nbind(User.findOne, User);
		//check to see if user exist
		findOne({username: username})
		.then(function(user){
			if(user){
				next(new Error('User already exist!'));
			}else{
				//making a new user
				//create = Q.nbind(User.create, User);
				newUser = {
					//just try with username for now, add the other properties later
					username: username
				};
				//create(newUser)
				res.status(200).json(newUser);
			}
		}).fail(function(error){
			next(error);
		});
	}
}