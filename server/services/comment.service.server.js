module.exports = function(app){
  var commentModel = require("../models/comment/comment.model.server");

  app.post("/api/user/:userId/book/:bookId/comment", createComment);
  app.get("/api/book/:bookId/comment", findAllCommentsForBook);
  app.get("/api/comment/:commentId", findCommentById);
  app.put("/api/comment/:commentId", updateComment);
  app.delete("/api/comment/:commentId", deleteComment);

  function createComment(req, res){
    var userId = req.params['userId'];
    var bookId = req.params['bookId'];
    var comment = req.body;
    commentModel.createComment(bookId, userId, comment)
      .then(function(response){
        res.status(200).send(response);
      });
  }

  function findAllCommentsForBook(req, res) {
    var bookId = req.params['bookId'];
    commentModel.findAllCommentsForBook(bookId)
      .then(function(response){
        res.status(200).send(response);
      }, function(err) {
        res.send(500);
      });
  }

  function findCommentById(req, res){
    var commentId = req.params['commentId'];
    commentModel.findCommentById(commentId)
      .then(function(page) {
        res.status(200).json(page);
      }, function(err) {
        console.log(err);
        res.status(500);
      });
  }

  function updateComment(req, res){
    var commentId = req.params['commentId'];
    var comment = req.body;
    commentModel.updateComment(commentId, comment)
      .then(function (response) {
        res.status(200).json(response);
      }, function(err) {
        console.log(err);
        res.status(500);
      });
  }

  function deleteComment(req, res){
    var commentId = req.params['commentId'];
    commentModel.deleteComment(commentId)
      .then(() => (
      res.sendStatus(200)));
  }

};
