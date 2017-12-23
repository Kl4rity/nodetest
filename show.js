var content = require('./content');

function showPage(response, sPathName){
  if (content.dContentMap[sPathName]){
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(content.dContentMap[sPathName]);
    response.write('<p>You requested the path: '+ sPathName +'</p>');
    response.end();
  } else {
    response.writeHead(404, {'Content-Type': 'text/html'})
    response.write('404 Page not found');
    response.end();
  }
}
exports.showPage = showPage;
