var User = require('../db.js').User;

var UserController = {};

UserController.signup = function(req, res) {
	var username = req.body.username;
	var password = req.body.password;
	User({
		username: username,
		password: password
	}).save()
	.then(function(user) {
		console.log('user', user);
	});
};


UserController.login = function(req, res){
	var username = req.body.username;
	var attemptedPassword = req.body.password;
	User.findOne({username: username})
	.then(function(user){
		if(!user){
			res.send({error:'user does not exist'});
		}
		else{
			if(user.password === attemptedPassword){
				res.send({username: username});
			}
			else{
				res.send({error: 'incorrect password'});
			}
		}
	})
	.catch(function(err){
		res.sendStatus(401);//look up correct error code
	})
}

module.exports = UserController;
