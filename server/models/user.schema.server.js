var mongoose = require('mongoose');
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
  dateCreated: {type: Date, default : Date.now}
}, {collection: 'user'});

module.exports = userSchema;

