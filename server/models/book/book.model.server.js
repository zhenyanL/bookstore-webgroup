var mongoose = require ("mongoose");
var BookSchema = require("./book.schema.server");
var BookModel =  mongoose.model("Book", BookSchema);

var UserModel = require("../user/user.model.server");

BookModel.createBookForSeller=createBookForSeller;
BookModel.findAllBooksForUser=findAllBooksForUser;
BookModel.findAllBooks=findAllBooks;
BookModel.findBookById=findBookById;
BookModel.findBookByName=findBookByName;
BookModel.updateBook=updateBook;
BookModel.deleteBook=deleteBook;
BookModel.addBookInShoppingList=addBookInShoppingList;
BookModel.buyOneBook=buyOneBook;
BookModel.buyBooksInShoppingList = buyBooksInShoppingList;

module.exports = BookModel;

function createBookForSeller(userId, book){
  book._seller = userId;
  return BookModel.create(book)
    .then(function(responseBook){
      UserModel.findUserById(userId)
        .then(function(user){
          user.books.push(responseBook);
          return user.save();
        });
      return responseBook;
    });
}

function findAllBooksForUser(userId) {
  UserModel.findUserById(userId).then(function(user){
    if (user.role === 'SELLER') {
      return BookModel.find({_seller: userId});
    } else if (user.role === 'BUYER') {
      return BookModel.find({_buyer: userId});
    }
  });
}

function findAllBooks() {
  return BookModel.find({});
}

function findBookById(bookId) {
  return BookModel.findById({_id: bookId});
}

function findBookByName(name) {
  return BookModel.find({name: name});
}

function updateBook(bookId, book) {
  return BookModel.update({_id: bookId}, book);
}

function deleteBook(bookId) {
  BookModel.findById(bookId).then(function (book) {
    UserModel.findUserById(book._seller).then(function (user) {
      user.books.pull({_id: bookId});
      user.save();
    });
    return BookModel.remove({_id: bookId});
  });
}

function addBookInShoppingList(bookId, userId) {
  UserModel.findUserById(userId)
    .then(function(user){
      user.booksShoppingList.push(BookModel.findBookById(bookId));
      return user.save();
    });
}


function buyOneBook(bookId, userId) {
  return UserModel.findUserById(userId)
    .then(function(user){
      BookModel.findBookById(bookId)
        .then(function(book) {
          book.number--;
          book._buyer.push(user._id);
          user.books.push(book);
          book.save();
        });
      return user.save();
    });
}

function buyBooksInShoppingList(userId) {
  var totalPrice = 0;
  UserModel.findUserById(userId)
    .then(function(user){
      user.booksShoppingList.forEach(function(book) {
        book.number--;
        book.save();
        user.books.push(book);
        user.save();
        totalPrice += book.price;
      })
    });
  UserModel.update({_id: userId}, {$set: {booksShoppingList: []}});
  return totalPrice;
}
