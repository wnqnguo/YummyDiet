var express = require('express');
//var mongoose    = require('mongoose');

var app = express();
//mongoose.connect('mongodb://localhost/myDB');
app.use(express.static(__dirname + '/../client/www/'));
  //mongoose.connect();
app.listen(8000, function(){
	console.log('server started');
});

//app.get('/signup', splashCtrl.signup);
