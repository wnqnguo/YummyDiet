module.exports = function ( app, passport){
	// app.post('/signup',function(req,res){
	// 	var data = req.body;
	// 	console.log('inside server', data);
	// 	res.send('got it ');
	// });

	 // app.post('/signup', pfunction(req,res){
	 // 	console.log('in side post to signup', req.body);
	 // 	res.send('authenticated');
	 // });
	    // process the signup form
    app.post('/emailSignup', passport.authenticate('local-signup'), function(req,res){
    	console.log('authentication successful ');
    	console.log('req is: ', req.body);
    	//res.redirect('/name');
    	res.send('authenticatedddddd');
    });

    app.post('/emailLogin', passport.authenticate('local-login'), function(req, res){
    	console.log('logged in');
    	res.send('logged in successful');
    });

};