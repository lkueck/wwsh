var Zing = require('../db.js').Zing;

var ZingController = {};

ZingController.getAllZings = function(req, res){
	Zing.find()
	.then(function(zings){
		res.send(zings);
	})
	.catch(function(error){
		res.send({error:error});
	})
}

ZingController.zingify = function(req, res){
	var username = req.body.username;
	var message = req.body.message;
	Zing({
		username: username,
		message: message
	}).save()
	.then(function(resp){
		res.send(200);
	})
	.catch(function(error){
		res.send({error:error});
	})
}


module.exports = ZingController;
