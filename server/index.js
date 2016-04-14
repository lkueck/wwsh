var express = require('express');
var app = express();
var port = process.env.PORT || 7777;
var db = require('./db.js');

var Zing = require('./db.js').Zing;
var User = require('./db.js').User;



require('./middleware.js')(app, express);

app.listen(port);
console.log("Listening on port", port);