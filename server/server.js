var morgan = require('morgan');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mongoose    = require('mongoose');
var userRouter= express.Router();
var app = express();




mongoose.connect('mongodb://localhost:27017/users');



app.use(express.static(__dirname + '/../client/www/'));
app.use(bodyParser.json());
app.use('/name', userRouter);
app.use('/name', userRouter);
// app.get('/gender',function(){
// 	console.log('get request to server');
// });

app.listen(8000, function(){
	console.log('server started');
});


var userRouter = require('./users/userRoutes.js')(app);
module.exports = app;
