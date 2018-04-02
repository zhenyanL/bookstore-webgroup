var mongoose = require("mongoose");
var UserSchema = require("./user.schema.server");
var UserModel = mongoose.model("User", UserSchema);

UserModel.createUser = createUser;
UserModel.findUserById = findUserById;
UserModel.findUserByUserName = findUserByUserName;
UserModel.findUserByCredentials = findUserByCredentials;
UserModel.updateUser = updateUser;
UserModel.deleteUser = deleteUser;
// UserModel.findAllUsers = findAllUsers;

module.exports = UserModel;

function createUser(user){
  console.log(user);
  return UserModel.create(user);
}

function findUserById(userId){
  return UserModel.findById({_id: userId});
}

function findUserByUserName(username){
  var user = null;
  UserModel.findOne({username: username}).then(function (result) {
    console.log(result);
    user = result;
  });
  return user;
}

function findUserByCredentials(username, password){
  return UserModel.findOne({username: username, password: password});
}

function updateUser(userId, user){
  return UserModel.update({_id: userId}, user);
}

/*
function updateUser(userId, user) {
  //ignore _id
  delete user._id;
  return UserModel
    .update({_id: userId},{
      $set: {firstName : user.firstName,
        lastName : user.lastName,
        email: user.email}}
    );
}

function findAllUsers(){
  UserModel.find(function (err, doc) {
    console.log(docs);
  })
}

*/

function deleteUser(userId) {
  return UserModel.remove({_id: userId});
}
