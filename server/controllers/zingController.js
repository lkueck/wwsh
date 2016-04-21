var Zing = require('../db.js').Zing;

var ZingController = {};

ZingController.getAllZings = function(req, res){
	var results = [];
	Zing.find()
	.then(function(zings){
		zings.forEach(function(zing){
			var tmpZing = zing.toObject();
			tmpZing.time = tmpZing._id.getTimestamp();
			results.push(tmpZing);
		});
		res.send(results);
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
	})
	.then(function(resp){
		res.send(200);
	})
	.catch(function(error){
		res.send({error:error});
	})
}


module.exports = ZingController;