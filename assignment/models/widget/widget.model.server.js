var mongoose = require ("mongoose");
var WidgetSchema = require("./widget.schema.server");
var WidgetModel =  mongoose.model("Widget", WidgetSchema); //mongo plurarizes
var PageModel = require("../page/page.model.server");

WidgetModel.createWidget = createWidget;
WidgetModel.findAllWidgetsForPage = findAllWidgetsForPage;
WidgetModel.findWidgetById = findWidgetById;
WidgetModel.updateWidget = updateWidget;
WidgetModel.deleteWidget = deleteWidget;
WidgetModel.reorderWidgets = reorderWidgets;
WidgetModel.updatePosition = updatePosition;

module.exports = WidgetModel;

function createWidget(pageId, widget)  {
  widget._page = pageId;
  return WidgetModel.create(widget)
    .then(function(responseWidget){
      PageModel.findPageById(pageId)
        .then(function(page){
          responseWidget.position = page.widgets.length;
          responseWidget.save();
          console.log(responseWidget.text, responseWidget.position);
          page.widgets.push(responseWidget);
          return page.save();
        });
      return responseWidget;
    });
}

function findAllWidgetsForPage(pageId) {
  return WidgetModel.find({_page: pageId});
}

function findWidgetById(widgetId) {
  return WidgetModel.findById({_id: widgetId});
}

function updateWidget(widgetId, widget) {
  return WidgetModel.update({_id: widgetId}, widget);
}

/*
function updateWidget(widgetId, widget) {
  delete widget._id;
  return WidgetModel
    .update({_id: widgetId},{
      $set : widget
    })
}
*/

function deleteWidget(widgetId) {
  WidgetModel.findById(widgetId).then(function(widget) {
    PageModel.findPageById(widget._page).then(function(page){
      page.widgets.pull({_id: widgetId});
      page.save();
    })
  });
  WidgetModel.findById(widgetId).then(function(widget) {
    var index = widget.position;
    updatePosition(widget._page, index);
  });
  return WidgetModel.remove({_id: widgetId});
}

function reorderWidgets(pageId, start, end) {
  return WidgetModel.find({_page: pageId}, function (err,widgets) {
    widgets.forEach (function (widget) {
      if (start < end) {
        if (widget.position === start) {
          widget.position = end;
          widget.save();
        } else if (widget.position > start && widget.position <= end) {
          widget.position--;
          widget.save();
        }
      }else {
          if (widget.position === start){
            widget.position = end;
            widget.save();
          } else if (widget.position < start && widget.position >= end){
            widget.position ++;
            widget.save();
          }
        } // console.log(widget.text, widget.position);
      })
  })
}

function updatePosition (pageId, position) {
  return WidgetModel.find({_page:pageId}, function (err, widgets) {
    widgets.forEach (function (widget) {
      if(widget.position > position){
        widget.position--;
        widget.save();
      }
    })
  })
}


