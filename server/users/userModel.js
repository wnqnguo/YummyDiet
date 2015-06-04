var mongoose = require('mongoose');
var bcrypt = require ('bcrypt-nodejs');
var userSchema = new mongoose.Schema({
    email    : String,
    password : String,
    current_weight: String

    
    
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

// methods
// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
}; 

//var User = mongoose.model('User', userSchema);
module.exports = mongoose.model('User', userSchema);






