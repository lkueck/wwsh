var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/tour');
var db = mongoose.connection;

db.once('open', function(){
    console.log("Mongo connection was succesful");
});

var userSchema = new mongoose.Schema({
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

var zingSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true
	},
	message: {
		type: String,
		required: true
	}
});

//TEST DATA

var User = mongoose.model('User', userSchema);
var Zing = mongoose.model('Zing', zingSchema);


Zing.find({
	username: 'festus'
}).remove().then(function(removal) {
	console.log('removal of zing succes');
});

User.find({
	username: 'festus'
}).remove().then(function(removal) {
	console.log('removal of festus succes');
});

User({
	username: 'festus',
	password: 'bestus'
}).save()
.then(function(user) {
	console.log('user', user);
});

Zing({
	username: 'festus',
	message: 'Hi Guys!'
}).save()
.then(function(zing) {
	console.log('zing', zing);
});

module.exports.db = db;
module.exports.User = User;
module.exports.Zing = Zing;