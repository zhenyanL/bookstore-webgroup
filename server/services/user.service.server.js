module.exports = function (app) {
  var userModel = require('../models/user/user.model.server');
  var passport = require('passport');
  var LocalStrategy = require('passport-local').Strategy;
  var FacebookStrategy = require('passport-facebook').Strategy;
  var bcrypt = require("bcrypt-nodejs");

  passport.serializeUser(serializeUser);
  passport.deserializeUser(deserializeUser);

  app.post('/api/register', register);
  app.post('/api/login', passport.authenticate('local'), login);
  app.post('/api/logout', logout);
  app.post('/api/loggedIn', loggedin);

  app.get('/api/user', findAllUsers);
  app.get('/api/user/:userId', findUserById);
  app.put('/api/user/:userId', updateUser);
  app.delete('/api/user/:userId', deleteUser);

  var facebookConfig = {
    clientID     : process.env.FACEBOOK_CLIENT_ID,
    clientSecret : process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL  : process.env.FACEBOOK_CALLBACK_URL
  };
  // auth with Facebook
  app.get ('/facebook/login', passport.authenticate('facebook', { scope : 'email' }));
  app.get('/auth/facebook/callback', passport.authenticate('facebook', {
    successRedirect: '/profile',
    failureRedirect: '/login'
  }));

  function localStrategy(username, password, done) {
    userModel.findUserByUsername(username).then(
      function (user) {
        if (user && bcrypt.compareSync(password, user.password)) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      },
      function (err) {
        if (err) {
          return done(err);
        }
      });
  }

  function serializeUser(user, done) {
    done(null, user);
  }

  function deserializeUser(user, done) {
    userModel.findUserById(user._id).then(
      function (user) {
        done(null, user);
      },
      function (err) {
        done(err, null);
      }
    );
  }

  function facebookStrategy(token, refreshToken, profile, done) {
    userModel.findUserByFacebookId(profile.id)
      .then(
        function(user) {
          if(user) {
            return done(null, user);
          } else {
            var names = profile.displayName.split(" ");
            var newFacebookUser = {
              lastName:  names[1],
              firstName: names[0],
              email:     profile.emails ? profile.emails[0].value:"",
              facebook: {
                id:    profile.id,
                token: token
              }
            };
            return userModel.createUser(newFacebookUser);
          }
        },
        function(err) {
          if (err) { return done(err); }
        }
      )
      .then(
        function(user){
          return done(null, user);
        },
        function(err){
          if (err) { return done(err); }
        }
      );
  }

  function register(req, res) {
    var user = req.body;
    console.log(user);
    user.password = bcrypt.hashSync(user.password);
    userModel.findUserByUsername(user.username)
      .then(function (data) {
        if (data) {
          res.status(400).send('Username is in use!');
        } else {
          userModel.createUser(user)
            .then(function (user) {
              console.log(user);
              if (user) {
                req.login(user, function (err) {
                  if (err) {
                    res.status(400).send(err);
                  } else {
                    res.json(user);
                  }
                });
              }
            });
        }
      });
  }

  function login(req, res) {
    var user = req.user;
    res.json(user);
  }

  function logout(req, res) {
    req.logout();
    res.send(200);
  }

  function loggedin(req, res) {
    res.send(req.isAuthenticated() ? req.user : '0');
  }

  function findAllUsers(req, res) {
    userModel.findAllUsers()
      .then(function(response) {
        res.status(200).send(response);
      }, function(err) {
        res.send(500);
      });
  }

  function findUserById(req, res) {
    var userId = req.params["userId"];
    userModel.findUserById(userId).then(function (user){
      res.json(user);
    })
  }

  function updateUser(req, res) {
    var userId = req.params["userId"];
    var user = req.body;
    userModel.updateUser(userId, user)
      .then(function(status){
        res.send(status);
      })
  }

  function deleteUser(req, res) {
    var userId = req.params["userId"];
    userModel.deleteUser(userId)
      .then(function(status){
        res.send(status);
      })
  }
};

