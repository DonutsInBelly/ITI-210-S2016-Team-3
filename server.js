// server.js

var express  = require('express');
var app      = express();
var port     = process.env.PORT || 8080;
var mongoose = require('mongoose');
var passport = require('passport');
var flash    = require('connect-flash');

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');

app.use(express.static(__dirname + '/public_html'));
app.use(express.static(__dirname + '/views'));

require('./app/routes.js');
app.listen(port);
console.log('Listening on ' + port + ' at http://localhost:' + port);
