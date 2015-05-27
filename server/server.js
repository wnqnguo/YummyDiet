var morgan = require('morgan');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var userRouter= express.Router();
var app = express();
var mongoose    = require('mongoose');



//module.exports = function (app, express) {


//mongoose.connect('mongodb://localhost/');


app.use(express.static(__dirname + '/../client/www/'));
app.use(bodyParser.json());
app.use('/name', userRouter);
// app.post('/name', 
// });
/*
app.post('/name', function(req,res){
 	    //res.send('bird home page');
    	console.log("HOW ABOUT THIS ONE????????????");
   });*/

app.listen(8000, function(){
	console.log('server started');
});


var userRouter = require('./users/userRoutes.js')(app);
module.exports = app;
// mod
//};