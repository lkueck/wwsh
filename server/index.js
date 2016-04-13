var express = require('express');
var app = express();
var port = process.env.PORT || 7777;
var db = require('./db.js');

require('./middleware.js')(app, express);

app.listen(port);
console.log("Listening on port", port);