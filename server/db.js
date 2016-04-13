var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/tour');
var db = mongoose.connection;

db.once('open', function(){
    console.log("Mongo connection was succesful");
});

var UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

module.exports.db = db;
module.exports.user = mongoose.model('users', UserSchema);