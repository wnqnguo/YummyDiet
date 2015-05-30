var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
  username: String,
  //breakfast: String

  /*
 ,
  password: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  weight: {
    type: String,
    required: true,
  },
  idealweight: {
    type: String,
    required: true,
  }*/
});

//var User = mongoose.model('User', userSchema);
module.exports = mongoose.model('User', userSchema);






