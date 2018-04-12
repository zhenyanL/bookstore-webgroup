var mongoose = require ("mongoose");
var CommentSchema = require("./comment.schema.server");
var CommentModel =  mongoose.model("Comment", CommentSchema); //mongo plurarizes
var BookModel = require("../book/book.model.server");

CommentModel.createComment = createComment;
CommentModel.findAllCommentsForBook = findAllCommentsForBook;
CommentModel.findCommentById = findCommentById;
CommentModel.updateComment = updateComment;
CommentModel.deleteComment = deleteComment;

module.exports = CommentModel;

function createComment(bookId, userId, comment) {
  comment._book= bookId;
  comment._author = userId;
  return CommentModel.create(comment)
    .then(function(responseComment){
      BookModel.findBookById(bookId)
        .then(function(book){
          book.comments.push(responseComment);
          return book.save();
        });
      return responseComment;
    });
}

function findAllCommentsForBook(bookId) {
  return CommentModel.find({_book: bookId});
}

function findCommentById(commentId) {
  return CommentModel.findById({_id: commentId});
}

function updateComment(commentId, comment) {
  return CommentModel.update({_id: commentId}, comment);
}

function deleteComment(commentId) {
  CommentModel.findById(commentId).then(function(comment) {
    BookModel.findBookById(comment._book).then(function(book){
      book.comments.pull({_id: commentId});
      book.save();
    })
  });
  return CommentModel.remove({_id: commentId});
}
