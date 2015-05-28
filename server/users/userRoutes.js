var userController = require('./userController.js');
//var express = require('express');
//var userRouter = express.Router();

  // app === userRouter injected from middlware.js

 // app.post('/signin', userController.signin);
  //app.post('/name', userController.signup);
module.exports = function (app){
	/*app.post('/name', function(req,res){
 	    res.send('bird home page');
    	console.log("HOW ABOUT THIS ONE????????????");
   });*/
	app.post('/name', userController.name);
	app.get('/gender', userController.fetch);
 };
 //module.exports = userRouter;

  
 // app.get('/signedin', userController.checkAuth);
