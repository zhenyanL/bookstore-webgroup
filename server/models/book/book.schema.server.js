var mongoose = require("mongoose"); // mongoDb has no notion of schemas. this is at the application level
var CommentSchema = require("../comment/comment.schema.server");

var BookSchema = mongoose.Schema ({
  _seller : {type : mongoose.Schema.ObjectId, ref: "User"},
  _buyer: [{type : mongoose.Schema.ObjectId, ref: "User"}] ,
  name : String,
  author : String,
  publisher: String,
  publishYear: Number,
  description : String,
  imageUrl : String,
  number: Number,
  price : Number,
  comments: [CommentSchema],
  rating: Number,
  ratingNumber: Number,
  position: Number,
  dateCreated : {type: Date, default : Date.now} //Date.now is the current time
}, {collection: "book" });

module.exports = BookSchema;
