var http = require('http');

var port = 8888;

http.createServer(onRequest).listen(port);
console.log("Server has started on port" + port);

function onRequest(request, response){
  response.writeHead(200);
  response.write('Hello Noders');
  response.end();
}
