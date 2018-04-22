var mongoose = require ("mongoose");
var SharedBookSchema = require("./sharedBook.schema.server");
var SharedBookModel =  mongoose.model("SharedBook", SharedBookSchema);

  // var UserModel = require("../user/user.model.server");

// BookModel.createBookForSeller=createBookForSeller;
// BookModel.findAllBooksForUser=findAllBooksForUser;
// BookModel.findBookById=findBookById;
// BookModel.updateBook=updateBook;
// BookModel.deleteBook=deleteBook;
// BookModel.addBookInShoppingList=addBookInShoppingList;
// BookModel.buyBooksInShoppingList = buyBooksInShoppingList;

SharedBookModel.createSharedBook = createSharedBook;
SharedBookModel.deleteSharedBook = deleteSharedBook;
SharedBookModel.findAllSharedBook = findAllSharedBook;
SharedBookModel.updateSharedBook = updateSharedBook;
SharedBookModel.findOneSharedBook = findById;

module.exports = SharedBookModel;

function createSharedBook(sharedBook) {
  return SharedBookModel.create(sharedBook);
}

function deleteSharedBook(id) {
  return SharedBookModel.findByIdAndRemove(id);
}

function findAllSharedBook() {
  return SharedBookModel.find({});
}

function updateSharedBook(id,book) {
  console.log("?????");
  console.log(book);
  return SharedBookModel.update({_id: id}, book);
}

function findById(id) {
  return SharedBookModel.findById(id);
}

// function createBookForSeller(userId, book){
//   book._seller = userId;
//   return BookModel.create(book)
//     .then(function(responseBook){
//       UserModel.findUserById(userId)
//         .then(function(user){
//           user.books.push(responseBook);
//           return user.save();
//         });
//       return responseBook;
//     });
// }
//
// function findAllBooksForUser(userId) {
//   UserModel.findUserById(userId).then(function(user){
//     if (user.role === 'SELLER') {
//       return BookModel.find({_seller: userId});
//     } else if (user.role === 'BUYER') {
//       return BookModel.find({_buyer: userId});
//     }
//   });
// }
//
// function findBookById(bookId) {
//   return BookModel.findById({_id: bookId});
// }
//
// function updateBook(bookId, book) {
//   return BookModel.update({_id: bookId}, book);
// }
//
// function deleteBook(bookId) {
//   BookModel.findById(bookId).then(function (book) {
//     UserModel.findUserById(book._seller).then(function (user) {
//       user.books.pull({_id: bookId});
//       user.save();
//     });
//     return BookModel.remove({_id: bookId});
//   });
// }
//
// function addBookInShoppingList(bookId, userId) {
//   UserModel.findUserById(userId)
//     .then(function(user){
//       user.booksShoppingList.push(BookModel.findBookById(bookId));
//       return user.save();
//     });
// }
//
// function buyBooksInShoppingList(userId) {
//   var totalPrice = 0;
//   UserModel.findUserById(userId)
//     .then(function(user){
//       user.booksShoppingList.forEach(function(book) {
//         book.number--;
//         book.save();
//         user.books.push(book);
//         user.save();
//         totalPrice += book.price;
//       })
//     });
//   UserModel.update({_id: userId}, {$set: {booksShoppingList: []}});
//   return totalPrice;
// }
