var mongoose = require ("mongoose");
var WebsiteSchema = require("./website.schema.server");
var WebsiteModel =  mongoose.model("Website", WebsiteSchema);

var UserModel = require("../user/user.model.server");

WebsiteModel.createWebsiteForUser=createWebsiteForUser;
WebsiteModel.findAllWebsitesForUser=findAllWebsitesForUser;
WebsiteModel.findWebsiteById=findWebsiteById;
WebsiteModel.updateWebsite=updateWebsite;
WebsiteModel.deleteWebsite=deleteWebsite;

module.exports = WebsiteModel;

function createWebsiteForUser(userId, website){
  website._user = userId;
  return WebsiteModel.create(website)
    .then(function(responseWebsite){
      UserModel.findUserById(userId)
        .then(function(user){
          user.websites.push(responseWebsite);
          return user.save();
        });
      return responseWebsite;
    });
}

function findAllWebsitesForUser(userId) {
  return WebsiteModel.find({_user: userId})
    .populate('_user', 'username')
    .exec();
}

function findWebsiteById(websiteId) {
  return WebsiteModel.findById({_id: websiteId});
}

function updateWebsite(websiteId, website) {
  return WebsiteModel.update({_id: websiteId}, website);
}

function deleteWebsite(websiteId) {
  WebsiteModel.findById(websiteId).then(function(website) {
    UserModel.findUserById(website._user).then(function(user){
      user.websites.pull({_id: websiteId});
      user.save();
    })
  });
  return WebsiteModel.remove({_id: websiteId});
}

/*
function updateWebsite(websiteId, website){
  delete website._id;
  return WebsiteModel
    .update({_id: websiteId},{
      $set: { name : website.name,
        description : website.description
      }}
    );
}
*/
