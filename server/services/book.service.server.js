module.exports = function(app){
  var bookModel = require("../models/book/book.model.server");
  var multer = require('multer'); // npm install multer --save
  var upload = multer({ dest: __dirname+'/../../dist/uploads' });

  app.get("/api/user/:userId/book", findAllBooksForUser);
  app.get("/api/book/:bookId", findBookById);
  app.get("/api/books", findAllBooks);
  app.get("/api/searchbooks/:bookName", findBookByName);

  // for seller
  app.post("/api/user/:userId/book", createBook);
  app.put("/api/book/:bookId", updateBook);
  app.delete("/api/book/:bookId", deleteBook);

  // for buyer
  app.put("/api/user/:userId/book/:bookId", addBookToShoppingList);
  app.put("/api/user/:userId/book1/:bookId", buyOneBook);
  app.put("/api/user/:userId/book", buyBooksInShopplingList);


  function createBook(req, res){
    var userId = req.params['userId'];
    var book = req.body;
    book._seller = userId;
    bookModel.createBookForSeller(userId, book)
      .then(function(response){
        res.status(200).send(response);
      });
  }

  function findAllBooksForUser(req, res) {
    var userId = req.params['userId'];
    bookModel.findAllBooksForUser(userId)
      .then(function(response){
        res.status(200).send(response);
      }, function(err) {
        res.send(500);
      });
  }

  function findAllBooks(req, res) {
    bookModel.findAllBooks()
      .then(function(response){
        res.status(200).send(response);
      }, function(err) {
        res.send(500);
      });
  }

  function findBookById(req, res){
    var bookId = req.params['bookId'];
    bookModel.findBookById(bookId)
      .then(function(response) {
        res.status(200).json(response);
      }, function(err) {
        console.log(err);
        res.status(500);
      });
  }

  function findBookByName(req, res){
    var bookName = req.params['bookName'];
    bookModel.findBookByName(bookName)
      .then(function(response) {
        res.status(200).json(response);
      }, function(err) {
        console.log(err);
        res.status(500);
      });
  }

  function updateBook(req, res){
    var bookId = req.params['bookId'];
    var book = req.body;
    bookModel.updateBook(bookId, book)
      .then(function (response) {
        res.status(200).json(response);
      }, function(err) {
        console.log(err);
        res.status(500);
      });
  }

  function deleteBook(req, res){
    var bookId = req.params['bookId'];
    bookModel.deleteBook(bookId)
      .then(function(response){
        res.status(200).json(response);
      }, function(err) {
        console.log(err);
        res.status(500);
      });
  }

  function addBookToShoppingList(req, res) {
    var userId = req.params['userId'];
    var bookId = req.params['bookId'];
    bookModel.addBookInShoppingList(bookId, userId)
      .then(function(response){
        res.status(200).json(response);
      }, function(err) {
        console.log(err);
        res.status(500);
      });
  }

  function buyOneBook(req, res) {
    var userId = req.params['userId'];
    var bookId = req.params['bookId'];
    return bookModel.buyOneBook(bookId, userId)
      .then(function(response){
        res.status(200).json(response);
      }, function(err) {
        console.log(err);
        res.status(500);
      });
  }

  function buyBooksInShopplingList(req, res) {
    var userId = req.params['userId'];
    return bookModel.buyBooksInShoppingList(userId)
      .then(function(response){
        res.status(200).json(response);
      }, function(err) {
        console.log(err);
        res.status(500);
      });
  }

};
