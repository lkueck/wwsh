var bodyParser = require('body-parser');
var Path = require('path');

module.exports = function(app, express) {

	var userRouter = express.Router();
	// var adminRouter = express.Router();

	var assetFolder = Path.resolve(__dirname, '../client/');
	app.use( express.static(assetFolder) );
	app.use( bodyParser.json() );

	app.use('/user', userRouter);
	// app.use('/admin', adminRouter);

  require('./routers/userRouter.js')(userRouter);
 //  require('./routers/adminRouter.js')(adminRouter);

};