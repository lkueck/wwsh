var ZingController = require('../controllers/zingController.js')
module.exports = function(app) {
	app.get('/all', ZingController.getAllZings);
	app.post('/', ZingController.zingify);
};