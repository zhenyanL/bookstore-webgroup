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
          book.rating = (book.rating * (book.comments.length - 1) + comment.rating) / book.comments.length;
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

function updateComment(commentId, newComment) {
  BookModel.findBookById(newComment._book).then(function(book){
    let oldComment = book.comments.find(x => x._id == commentId);
    let index = book.comments.indexOf(oldComment);
    book.comments[index] = newComment;
    let sum = 0;
    for (let comment of book.comments) {
      sum += comment.rating;
    }
    book.rating = sum / book.comments.length;
    book.save();
  });
  return CommentModel.update({_id: commentId}, newComment);
}

function deleteComment(commentId) {
  CommentModel.findCommentById(commentId).then(function(comment) {
      BookModel.findBookById(comment._book).then(function(book){
        let oldComment = book.comments.find(x => x._id == commentId);
        let index = book.comments.indexOf(oldComment);
        let temp = (book.rating * book.comments.length - comment.rating) / (book.comments.length - 1);
        if (temp > 0) {
          book.rating = temp;
        } else {
          book.rating = 0;
        }
        book.comments.splice(index, 1);
        book.save();
      });
      return CommentModel.remove({_id: commentId});
    }
  );
}
