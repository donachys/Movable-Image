var app = {}
 app.MovableImage = require('ui/MovableImage');
 app.CanvasController = require('objects/CanvasController');
 
var mainwin = Ti.UI.createWindow();
var tempcanvascontroller = new app.CanvasController(mainwin);
mainwin.open();