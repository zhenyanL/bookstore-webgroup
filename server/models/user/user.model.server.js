var mongoose = require('mongoose');
var UserSchema = require('./user.schema.server');
var UserModel = mongoose.model("User", UserSchema);

UserModel.createUser = createUser;
UserModel.findUserById = findUserById;
UserModel.findUserByUsername = findUserByUsername;
UserModel.findUserByFacebookId = findUserByFacebookId;
UserModel.findUserByCredentials = findUserByCredentials;
UserModel.updateUser = updateUser;
UserModel.deleteUser = deleteUser;
UserModel.findAllUsers = findAllUsers;
UserModel.followUser = followUser;
UserModel.buyOneBook = buyOneBook;

module.exports = UserModel;

function createUser(user){
  return UserModel.create(user);
}

function findUserById(userId){
  return UserModel.findById({_id: userId});
}

function findUserByUsername(username){
  return UserModel.findOne({username: username});
}

function findUserByFacebookId(facebookId) {
  return UserModel.findOne({'facebook.id': facebookId});
}

function findUserByCredentials(username, password){
  return UserModel.findOne({username: username, password: password});
}

function updateUser(userId, user){
  return UserModel.update({_id: userId}, user);
}

function buyOneBook(userId, book) {
  return UserModel.findOne({_id: userId})
    .then(function(user){
          user.books.push(book);
          return user.save();
        });
}

function deleteUser(userId) {
  return UserModel.remove({_id: userId});
}

function findAllUsers() {
  return UserModel.find(function (err, doc) {
    console.log(doc);
  });
}


function followUser(myId, userId) {
  UserModel.findUserById(myId)
    .then(function(user){
      user.follow.push(userId);
      user.save();
    });
  UserModel.findUserById(userId)
    .then(function(user){
      user.followedBy.push(myId);
      user.save();
    });
}

