var http = require('http');
var url = require('url');
var show = require('./show');

var port = 8888;

http.createServer(onRequest).listen(port);
console.log("Server has started on port" + port);

function onRequest(request, response){
  var sPathName = url.parse(request.url).pathname;
  show.showPage(response, sPathName);
}
