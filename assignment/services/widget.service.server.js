module.exports = function(app){
  var widgetModel = require("../models/widget/widget.model.server");
  var multer = require('multer'); // npm install multer --save
  var upload = multer({ dest: __dirname+'/../../dist/uploads' });

  app.post("/api/page/:pageId/widget", createWidget);
  app.get("/api/page/:pageId/widget", findAllWidgetsForPage);
  app.get("/api/widget/:widgetId", findWidgetById);
  app.put("/api/widget/:widgetId", updateWidget);
  app.delete("/api/widget/:widgetId", deleteWidget);
  app.put("/api/page/:pageId/widget", reorderWidgets);
  app.post ("/api/upload", upload.single('myFile'), uploadImage);

  /*
  var WIDGETS = [
    { _id: "123", name: "", widgetType: "HEADING",  pageId: "321", size: "2", text: "GIZMODO", width: "", url: "", rows: 0, placeholder: "", formatted: false},
    { _id: "234", name: "", widgetType: "HEADING",  pageId: "321", size: "4", text: "Lorem ipsum", width: "", url: "", rows: 0, placeholder: "", formatted: false},
    { _id: "345", name: "", widgetType: "IMAGE",  pageId: "321", size: "2", text: "text", width: "100%", url: "https://news.northeastern.edu/wp-content/uploads/2016/10/ILP-01-800x0-c-default.jpg", rows: 0, placeholder: "", formatted: false},
    { _id: "456", name: "", widgetType: "HTML",   pageId: "321", size: "2", text: "Lorem ipsum", width: "", url: "", rows: 0, placeholder: "", formatted: false},
    { _id: "567", name: "", widgetType: "HEADING", pageId: "321", size: "4", text: "Lorem ipsum", width: "", url: "", rows: 0, placeholder: "", formatted: false},
    { _id: "678", name: "", widgetType: "YOUTUBE", pageId: "321", size: "2", text: "text", width: "100%", url: "https://www.youtube.com/embed/4jtVx4_QpKA", rows: 0, placeholder: "", formatted: false},
    { _id: "789", name: "", widgetType: "HTML", pageId: "321", size: "4", text: "Lorem ipsum", width: "", url: "", rows: 0, placeholder: "", formatted: false}
  ];
  */

  function createWidget(req, res){
    var pageId = req.params['pageId'];
    var widget = req.body;
    widget.pageId = pageId;
    widgetModel.createWidget(pageId, widget)
      .then(function(response){
        res.status(200).send(response);
      });
  }

  function findAllWidgetsForPage(req, res) {
    var pageId = req.params['pageId'];
    widgetModel.findAllWidgetsForPage(pageId)
      .then(function(response){
        res.status(200).send(response);
      }, function(err) {
        res.send(500);
      });
  }

  function findWidgetById(req, res){
    //console.log(req.params['widgetId']);
    var widgetId = req.params['widgetId'];
    widgetModel.findWidgetById(widgetId)
      .then(function(widget) {
        res.status(200).json(widget);
      }, function(err) {
        console.log(err);
        res.status(500);
      });
  }

  function updateWidget(req, res){
    var widgetId = req.params['widgetId'];
    var widget = req.body;
    widgetModel.updateWidget(widgetId, widget)
      .then(function (response) {
        res.status(200).json(response);
      }, function(err) {
        console.log(err);
        res.status(500);
      });
  }

  function deleteWidget(req, res){
    var widgetId = req.params['widgetId'];
    widgetModel.deleteWidget(widgetId)
      .then(function(response){
        res.status(200).json(response);
      }, function(err) {
        console.log(err);
        res.status(500);
      });
    /*
    var pageId = getWidgetById(widgetId).pageId;
    for(var i = 0; i < WIDGETS.length; i++) {
      if (WIDGETS[i]._id === widgetId) {
        WIDGETS.splice(i, 1);
        var widgets = getWidgetsForPageId(pageId);
        res.json(widgets);
        return;
      }
    }
    */
  }

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
  }

  function uploadImage(req, res) {
    var widgetId      = req.body.widgetId;
    var width         = req.body.width;
    var myFile        = req.file;
    var userId = req.body.userId;
    var websiteId = req.body.websiteId;
    var pageId = req.body.pageId;

    if(myFile == null) {
      //res.redirect("https://web-app-maker-angular-4.herokuapp.com/user/website/"+websiteId+"/page/"+pageId+"/widget/"+widgetId);
      res.redirect("http://localhost:5000/user/website/"+websiteId+"/page/"+pageId+"/widget/"+widgetId);
      return;
    }


    var originalname  = myFile.originalname; // file name on user's computer
    var filename      = myFile.filename;     // new file name in upload folder
    var path          = myFile.path;         // full path of uploaded file
    var destination   = myFile.destination;  // folder where file is saved to
    var size          = myFile.size;
    var mimetype      = myFile.mimetype;

    widgetModel.findWidgetById(widgetId)
      .then(function(widget) {
        widget.url = '/uploads/'+filename;
        widget.save();
      }, function(err) {
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

    var callbackUrl   = "/user/"+ userId+ "/website/" + websiteId + "/page/" + pageId+ "/widget/" + widgetId;
    //var callbackUrl   =  ("http://localhost:5000/user/"+ userId+ "/website/" + websiteId + "/page/" + pageId+ "/widget");
    //var callbackUrl   =  ("https://web2018.herokuapp.com/user/"+ userId+ "/website/" + websiteId + "/page/" + pageId+ "/widget");
    res.redirect(callbackUrl);
    return;
  }

  /*

  function getWidgetsForPageId(pageId) {
    var widgets=[];
    for(var i = 0; i < WIDGETS.length; i++) {
      if (WIDGETS[i].pageId === pageId) {
        widgets.push(WIDGETS[i]);
      }
    }
    return widgets;
  }

  function getWidgetById(widgetId){
    for(var i = 0; i < WIDGETS.length; i++) {
      if (WIDGETS[i]._id === widgetId) {
        return WIDGETS[i];
      }
    }
  }
  */

};

