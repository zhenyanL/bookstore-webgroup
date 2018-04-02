var mongoose = require('mongoose');
var WidgetSchema = require("../widget/widget.schema.server");

var pageSchema = mongoose.Schema({
  _website: {type: mongoose.Schema.Types.ObjectId, ref: 'Website'},
  name: String,
  title: String,
  description: String,
  widgets: [WidgetSchema], //update with widgets when created
  dateCreated: {type: Date, default: Date.now}
}, {collection: 'assignment.page'});

module.exports = pageSchema;
