var mongoose = require("mongoose"); // mongoDb has no notion of schemas. this is at the application level
var CommentSchema = require("../comment/comment.schema.server");

var SharedBookSchema = mongoose.Schema ({
  // _seller : {type : mongoose.Schema.ObjectId, ref: "User"},
  // _buyer: [{type : mongoose.Schema.ObjectId, ref: "User"}] ,
  // name : String,
  // author : String,
  // description : String,
  // imageUrl : String,
  // imageWidth : String,
  // number: Number,
  // price : Number,
  // comments: [CommentSchema],
  // rating: Number,
  // ratingNumber: Number,
  // position: Number,
  // dateCreated : {type: Date, default : Date.now} //Date.now is the current time
  name: String,
  content: String,
  description: String,
  imageURL: String,
  dateCreated: {type: Date, default : Date.now}
}, {collection: "sharedBook" });

module.exports = SharedBookSchema;
