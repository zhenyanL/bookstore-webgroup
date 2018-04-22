module.exports = function(app){
  var sharedBookModel = require("../models/sharedBook/sharedBook.model.server");

  app.get("/api/sharedBook",findAllSharedBook);
  app.get("/api/sharedBook/:id",findById);
  app.put("/api/sharedBook/:id",updateSharedBook);
  app.post("/api/sharedBook",createSharedBook);
  app.delete("/api/sharedBook/:id",deleteSharedBook);


  function findAllSharedBook(req,res) {
    sharedBookModel.findAllSharedBook()
      .then(function (response) {
        res.status(200).json(response);
      })
    // res.send("ok");
  }

  function findById(req,res) {
    console.log("find by id can work");
    var id = req.params['id'];
    sharedBookModel.findById(id)
      .then(function (response) {
        res.status(200).json(response);
      })
  }

  function updateSharedBook(req,res) {
    console.log("===========================");
    console.log("why not here?");
    var id = req.params['id'];
    var sharedBook = req.body;
    console.log("reach back end");
    console.log(sharedBook);
    console.log(id);
    sharedBookModel.updateSharedBook(id,sharedBook)
      .then(function (response) {
        res.status(200).json(response);
      })
  }

  function createSharedBook(req,res) {
    var sharedBook = req.body;
    console.log(sharedBook);
    sharedBookModel.createSharedBook(sharedBook)
      .then(function (response) {
        res.status(200).json(response);
      })
  }

  function deleteSharedBook(req,res) {
    var id = req.params['id'];
    sharedBookModel.deleteSharedBook(id)
      .then(function (response) {
        res.status(200).json(response);
      },function (err) {
        console.log(err);
        res.status(500);
      })
  }

}
