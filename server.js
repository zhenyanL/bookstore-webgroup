var express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var mongoose = require('mongoose');
// var dbmongo = mongoose.connect('mongodb://localhost:27017/webdev');
var dbmongo = mongoose.connect('mongodb://zhao:zhao@ds249269.mlab.com:49269/webgroup');
// var dbmongo = mongoose.connect('mongodb://webgroup:123456@ds133231.mlab.com:33231/webgroup');

const path = require('path');
const http = require('http');

var cookieParser = require('cookie-parser');
var session = require('express-session');

var secret = 'This is a secret';
if (process.env.SESSION_SECRET) {
  secret = process.env.SESSION_SECRET;
}
app.use(cookieParser());
app.use(session({ secret: secret, resave: true, saveUninitialized: true }));

var passport = require('passport');
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, 'dist')));

//CORS
app.use(function(reg, res, next){
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE, OPTIONS');
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

const port=process.env.PORT || '5000';
app.set('port', port);

// Create HTTP server
const server = http.createServer(app);
var io = require('socket.io')();
var socketService = require('./server/services/socket.service.server.js')(io);
io.attach(server);

require("./server/app")(app);

// For Build: Catch all other routes and return the index file -- BUILDING
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
  //app.use(express.static(path.join(__dirname, 'src/assets')));
});

server.listen( port , function() {
  console.log('Node app is running on port', app.get('port'))});

