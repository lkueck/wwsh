var UserController = require('../controllers/userController.js')
module.exports = function(app) {
	app.post('/login', UserController.login);
	app.post('/signup', UserController.signup);
};