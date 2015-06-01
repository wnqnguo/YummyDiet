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



mongoose.connect('mongodb://localhost:27017/users');

// require('./config/passport')(passport); // pass passport for configuration

app.use(express.static(__dirname + '/../client/www/'));
app.use(bodyParser());
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)


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

var userRouter = require('./users/userRoutes.js')(app);
module.exports = app;
