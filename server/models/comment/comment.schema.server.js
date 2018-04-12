var mongoose = require('mongoose');

var commentSchema = mongoose.Schema({
  _book: {type: mongoose.Schema.Types.ObjectId, ref: 'Book'},
  _author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  title: String,
  rating: Number,
  description: String,
  dateCreated: {type: Date, default: Date.now}
}, {collection: 'comment'});

module.exports = commentSchema;
