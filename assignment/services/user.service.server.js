module.exports = function (app) {
  var userModel = require("../models/user/user.model.server");

  app.post('/api/user', createUser);
  app.get('/api/user', findUser);
  app.get('/api/user/:userId', findUserById);
  app.put('/api/user/:userId', updateUser);
  app.delete('/api/user/:userId', deleteUser);

  /*
  var users = [
    {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonderland", email: "alice@gmail.com"},
    {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley", email: "bob@gmail.com"},
    {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia", email: "charly@gmail.com" },
    {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi", email: "jannunzi@gmail.com"}
  ];
  */

  function createUser(req, res) {
    var newUser = req.body;
    userModel.createUser(newUser)
      .then(function (user) {
        res.json(user);
      })
  }

  function findUser(req, res) {
    var username = req.query["username"];
    var password = req.query["password"];
    var user = null;
    if (username && password){
      var promise = userModel.findUserByCredentials(username, password);
      promise.then(function(user) {
        res.json(user);
      });
    } else if (username) {
      userModel.findUserByUserName(username)
        .then(function(user) {
          res.json(user);
        })
    } else {
      res.status(400).send("not found!");
    }
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
    //console.log(req.body);
    //console.log("update user: " + userId + " " + user.firstName + " " + user.lastName);
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
