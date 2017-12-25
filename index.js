var url = require('url');
var show = require('./show');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

var port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log("Server has started on port "+port);
})

app.get(null , (request, response) => {
  var sPathName = url.parse(request.url).pathname;
  show.showPage(response, sPathName);
})

// function onRequest(request, response){
//   var sPathName = url.parse(request.url).pathname;
//   show.showPage(response, sPathName);
// }
