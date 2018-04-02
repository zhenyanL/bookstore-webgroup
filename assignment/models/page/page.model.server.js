var mongoose = require ("mongoose");
var PageSchema = require("./page.schema.server");
var PageModel =  mongoose.model("Page", PageSchema); //mongo plurarizes
var WebsiteModel = require("../website/website.model.server");

PageModel.createPage = createPage;
PageModel.findAllPagesForWebsite = findAllPagesForWebsite;
PageModel.findPageById = findPageById;
PageModel.updatePage = updatePage;
PageModel.deletePage = deletePage;

module.exports = PageModel;

function createPage(websiteId, page) {
  page._website= websiteId;
  return PageModel.create(page)
    .then(function(responsePage){
      WebsiteModel.findWebsiteById(websiteId)
        .then(function(website){
          website.pages.push(responsePage);
          return website.save();
        });
      return responsePage;
    });
}

function findAllPagesForWebsite(websiteId) {
  return PageModel.find({_website: websiteId});
}

function findPageById(pageId) {
  return PageModel.findById({_id: pageId});
}

function updatePage(pageId, page) {
  return PageModel.update({_id: pageId}, page);
}

/*
function updatePage(pageId, page) {
  delete page._id;
  return PageModel
    .update({_id: pageId}, {
        $set: {
          name: page.name,
          title: page.title
        }
      }
    );
}
*/

function deletePage(pageId) {
  PageModel.findById(pageId).then(function(page) {
    WebsiteModel.findWebsiteById(page._website).then(function(website){
      website.pages.pull({_id: pageId});
      website.save();
    })
  });
  return PageModel.remove({_id: pageId});
}
