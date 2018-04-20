module.exports = function(app){
  var bookModel = require("../models/book/book.model.server");
  var multer = require('multer'); // npm install multer --save
  var upload = multer({ dest: __dirname+'/../../dist/uploads' });

  app.get("/api/user/:userId/book", findAllBooksForUser);
  app.get("/api/book/:bookId", findBookById);

  // for seller
  app.post("/api/user/:userId/book", createBook);
  app.put("/api/book/:bookId", updateBook);
  app.delete("/api/book/:bookId", deleteBook);
  app.post ("/api/upload", upload.single('myFile'), uploadImage);

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

/*
  function reorderWidgets(req, res) {
    var pageId = req.params['pageId'];
    var startIndex = parseInt(req.query["start"]);
    var endIndex = parseInt(req.query["end"]);
    widgetModel.reorderWidgets(pageId, startIndex, endIndex)
      .then(function (response) {
        res.status(200).json(response);
      }, function (err) {
        res.status(500).send(err);
      });
    /*
    var widgetsIndex = [];
    for (var i = 0; i < WIDGETS.length; i++) {
      if (WIDGETS[i].pageId === pageId) {
        widgetsIndex.push(i);
      }
    }
    var temp =  WIDGETS[widgetsIndex[startIndex]];
    if (startIndex < endIndex){
      for(var i = startIndex; i < endIndex; i++) {
        WIDGETS[widgetsIndex[i]] = WIDGETS[widgetsIndex[i + 1]];
      }
      WIDGETS[widgetsIndex[endIndex]] = temp;
    } else {
      for(var i = startIndex; i > endIndex; i--) {
        WIDGETS[widgetsIndex[i]] = WIDGETS[widgetsIndex[i - 1]];
      }
      WIDGETS[widgetsIndex[endIndex]] = temp;
    }
    res.sendStatus(200);
    */


  // FIX ME
  function uploadImage(req, res) {
    var bookId = req.body.bookId;
    var imageWidth = req.body.imageWidth;
    var myFile = req.file;
    var userId = req.body.userId;

    if (myFile == null) {
      //res.redirect("https://web-app-maker-angular-4.herokuapp.com/user/website/"+websiteId+"/page/"+pageId+"/widget/"+widgetId);
      res.redirect("http://localhost:5000/user/website/" + websiteId + "/page/" + pageId + "/widget/" + widgetId);
      return;
    }

    var originalname = myFile.originalname; // file name on user's computer
    var filename = myFile.filename;     // new file name in upload folder
    var path = myFile.path;         // full path of uploaded file
    var destination = myFile.destination;  // folder where file is saved to
    var size = myFile.size;
    var mimetype = myFile.mimetype;

    bookModel.findBookById(bookId)
      .then(function (book) {
        book.imageUrl = '/uploads/' + filename;
        book.save();
      }, function (err) {
        console.log(err);
        res.status(500);
      });

    /*
    if (widget === undefined) {
      widget = { _id: "", name: "", widgetType: "IMAGE",  pageId: pageId, size: "", text: "", width: "", url: "", rows: 0, placeholder: "", formatted: false};
      widget._id = pageId.toString() + (new Date()).getTime();
      widgetId = widget._id;
      WIDGETS.push(widget);
    }
    widget.url = '/uploads/'+filename;
    */

    var callbackUrl = "/user/website/" + websiteId + "/page/" + pageId + "/widget/" + widgetId;
    //var callbackUrl   =  ("http://localhost:5000/user/"+ userId+ "/website/" + websiteId + "/page/" + pageId+ "/widget");
    //var callbackUrl   =  ("https://web2018.herokuapp.com/user/"+ userId+ "/website/" + websiteId + "/page/" + pageId+ "/widget");
    res.redirect(callbackUrl);
    return;
  }

}
