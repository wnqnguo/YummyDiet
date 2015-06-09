var morgan = require('morgan');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mongoose    = require('mongoose');
var userRouter= express.Router();
var app = express();
var port = process.env.PORT || 8000;
var passport = require('passport');
var flash = require('connect-flash');
var cookieParser = require('cookie-parser');
var session      = require('express-session');
var request = require('request');



// mongoose.connect('mongodb://localhost:27017/users');
var configDB = require('../config/database.js');
mongoose.connect(configDB.url);

require('../config/passport')(passport); // pass passport for configuration

app.use(express.static(__dirname + '/../client/www/'));

app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: true })); 


// required for passport
app.use(session({ secret: 'myfirstfullstackapp' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// app.get('/gender',function(){
// 	console.log('get request to server');
// });

app.listen(port,function(){ console.log('server started!!!!!')});
//routes for local authentication 
require('../config/authRoutes.js')(app, passport) ;

//routes for navigating through the app
app.use('/name', userRouter);

app.get("/breakfast", function(req, res){
 
  var name = req.query.name;
  console.log('request.query', req.query.name);
  request("http://api.nal.usda.gov/ndb/search/?format=json&q="+name+"&sort=n&max=25&offset=0&api_key=cUzkfSi8jXH1X8Ry4k2g3TK7S5oEqCnsYSGoQXXk", function (error, response, body) {
   if (!error && response.statusCode == 200) {
    	//obj.test = response.body;
    	obj = response.body;
    	console.log(response.body);
      res.json(body);
    	
  	}
  	else if(error){
  		console.log("the error is : ", error);
  	}
  	else{
  		console.log("response code is :", response.statusCode );
  	}
  });
 
});
app.get("/nutrition", function(req, res){
 
  var ndbno = req.query.ndbno;
  console.log('request.query', req.query.ndbno);
  request("http://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=cUzkfSi8jXH1X8Ry4k2g3TK7S5oEqCnsYSGoQXXk&nutrients=205&nutrients=204&nutrients=208&nutrients=269&ndbno="+ndbno, function (error, response, body) {
   if (!error && response.statusCode == 200) {
      //obj.test = response.body;
      obj = response.body;
      console.log(response.body);
      res.json(body);
      
    }
    else if(error){
      console.log("the error is : ", error);
    }
    else{
      console.log("response code is :", response.statusCode );
    }
  });
 
});


var userRouter = require('./users/userRoutes.js')(app);
module.exports = app;













