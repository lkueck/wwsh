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

module.exports = ZingController;