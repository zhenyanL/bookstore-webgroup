var mongoose = require('mongoose');
var bookSchema = require("../book/book.schema.server");

var userSchema = mongoose.Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
  email: String,
  role: [{
    type:String,
    enum: ['ADMIN', 'SELLER', 'BUYER', 'WRITER']}],
  facebook : {
    token: String,
    id: String,
    displayName : String
  },
  books: [bookSchema],
  booksShoppingList: [bookSchema],
  // docs:[DocSchema],
  dateCreated: {type: Date, default : Date.now}
}, {collection: 'user'});

module.exports = userSchema;

