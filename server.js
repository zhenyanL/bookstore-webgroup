var express = require('express');
var mongoose = require('mongoose');
// var dbmongo = mongoose.connect('mongodb://localhost:27017/webdev');
var dbmongo = mongoose.connect('mongodb://shenjingyu:shenjingyu@ds263707.mlab.com:63707/heroku_pm4zvpxl')
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();

var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({secret: 'this is the secret', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'dist')));

//CORS
app.use(function(reg, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE, OPTIONS');
  next();
})

const port=process.env.PORT || '5000';
app.set('port', port);

// Create HTTP server
const server = http.createServer(app);

require("./assignment/app")(app);

// For Build: Catch all other routes and return the index file -- BUILDING
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
  //app.use(express.static(path.join(__dirname, 'src/assets')));
});

server.listen( port , function() {
  console.log('Node app is running on port', app.get('port'))});


