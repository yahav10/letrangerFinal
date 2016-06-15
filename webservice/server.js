var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
var session = require('express-session');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');
var todoAction = require('./todoActionsController');
var port = process.env.PORT || 3000;

/*** Server settings ***/
app.set('port', port);
app.use('/', express.static('./public'));
app.use(function(req, res, next){
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	//app.set('json spaces', 4);
	res.set("Content-Type", "application/json");
	next();
});

/*** All routes ***/
app.get('/ws_todo/getActionsData', todoAction.getData);
app.get('/ws_todo/getDesignersNames', todoAction.getDesignersNames);
app.get('/ws_todo/addProduct', todoAction.addData);
app.get('/ws_todo/saveActionsData', todoAction.saveData);


app.listen(port);
console.log("listening on port " + port);