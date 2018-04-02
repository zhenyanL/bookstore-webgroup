module.exports = function(app){
  var websiteModel = require("../models/website/website.model.server");

  app.post("/api/user/:userId/website", createWebsite);
  app.get("/api/user/:userId/website", findAllWebsiteForUser);
  app.get("/api/website/:websiteId", findWebsiteById);
  app.put("/api/website/:websiteId", updateWebsite);
  app.delete("/api/website/:websiteId", deleteWebsite);

  /*
  var WEBSITES = [
    {_id: "123", name: "Facebook", developerId: "456", description: "Lorem"},
    {_id: "234", name: "Tweeter", developerId: "456", description: "Lorem"},
    {_id: "456", name: "Gizmodo", developerId: "456", description: "Lorem"},
    {_id: "890", name: "Go", developerId: "123", description: "Lorem"},
    {_id: "567", name: "Tic Tac Toe", developerId: "123", description: "Lorem"},
    {_id: "678", name: "Checkers", developerId: "123", description: "Lorem"},
    {_id: "789", name: "Chess", developerId: "234", description: "Lorem"}
  ];
*/

  function createWebsite(req, res){
    var userId = req.params['userId'];
    var website = req.body;
    websiteModel.createWebsiteForUser(userId, website)
      .then(function (response) {
        res.status(200).send(response);
      });
  }

  function findAllWebsiteForUser(req, res) {
    var userId = req.params['userId'];
    websiteModel.findAllWebsitesForUser(userId)
      .then(function(response) {
        res.status(200).send(response);
      }, function(err) {
        res.send(500);
      });
  }

  function findWebsiteById(req, res){
    var websiteId = req.params['websiteId'];
    websiteModel.findWebsiteById(websiteId)
      .then(function(website) {
        res.status(200).json(website);
      }, function(err) {
        console.log(err);
        res.status(500);
      });
  }

  function updateWebsite(req, res){
    var websiteId = req.params['websiteId'];
    var website = req.body;
    websiteModel.updateWebsite(websiteId, website)
      .then(function (response) {
        res.status(200).json(response);
      }, function(err) {
        console.log(err);
        res.status(500);
      });
  }

  function deleteWebsite(req, res){
    var websiteId = req.params['websiteId'];
    websiteModel.deleteWebsite(websiteId)
      .then(function(response){
        res.status(200).json(response);
      }, function(err) {
        console.log(err);
        res.status(500);
      });
    /*(
    var userId = getWebsiteById(websiteId).developerId;
    for(var i = 0; i < WEBSITES.length; i++) {
      if (WEBSITES[i]._id === websiteId) {
        WEBSITES.splice(i, 1);
        var websites = getWebsitesForUserId(userId);
        res.json(websites);
        return;
      }
    }
    */
  }

};

