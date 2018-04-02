module.exports = function(app){
  var pageModel = require("../models/page/page.model.server");

  app.post("/api/website/:websiteId/page", createPage);
  app.get("/api/website/:websiteId/page", findAllPagesForWebsite);
  app.get("/api/page/:pageId", findPageById);
  app.put("/api/page/:pageId", updatePage);
  app.delete("/api/page/:pageId", deletePage);

  /*
  var PAGES = [
    {_id: "321", name: "Post 1", websiteId: "456", description: "Lorem"},
    {_id: "432", name: "Post 2", websiteId: "456", description: "Lorem"},
    {_id: "543", name: "Post 3", websiteId: "456", description: "Lorem"}
  ];
  */

  function createPage(req, res){
    var websiteId = req.params['websiteId'];
    var page = req.body;
    pageModel.createPage(websiteId, page)
      .then(function(response){
        res.status(200).send(response);
      });
  }

  function findAllPagesForWebsite(req, res) {
    var websiteId = req.params['websiteId'];
    pageModel.findAllPagesForWebsite(websiteId)
      .then(function(response){
        res.status(200).send(response);
      }, function(err) {
        res.send(500);
      });
  }

  function findPageById(req, res){
    var pageId = req.params['pageId'];
    pageModel.findPageById(pageId)
      .then(function(page) {
        res.status(200).json(page);
      }, function(err) {
        console.log(err);
        res.status(500);
      });
  }

  function updatePage(req, res){
    var pageId = req.params['pageId'];
    var page = req.body;
    pageModel.updatePage(pageId, page)
      .then(function (response) {
        res.status(200).json(response);
      }, function(err) {
        console.log(err);
        res.status(500);
      });
  }

  function deletePage(req, res){
    var pageId = req.params['pageId'];
    pageModel.deletePage(pageId)
      .then(function(response){
        res.status(200).json(response);
      }, function(err) {
        console.log(err);
        res.status(500);
      });
    /*
    var websiteId = getPageById(pageId).websiteId;
    for(var i = 0; i < PAGES.length; i++) {
      if (PAGES[i]._id === pageId) {
        PAGES.splice(i, 1);
        var pages = getPagesForWebsiteId(websiteId);
        res.json(pages);
        return;
      }
    }
    */
  }

};


