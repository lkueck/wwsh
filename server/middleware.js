var bodyParser = require('body-parser');
var Path = require('path');

module.exports = function(app, express) {

	var userRouter = express.Router();
	var zingRouter = express.Router();

	var assetFolder = Path.resolve(__dirname, '../client/');
	app.use( express.static(assetFolder) );
	app.use( bodyParser.json() );

	app.use('/user', userRouter);
	app.use('/zing', zingRouter);

  require('./routers/userRouter.js')(userRouter);
  require('./routers/zingRouter.js')(zingRouter);

};