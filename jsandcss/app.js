const http = require('http');
const rword = require('rword');
const hostname = '127.0.0.1';
const port = 3000;
var randomwords = rword.generate(5, { length: 5 });

var visitors = 0;

var server = http.createServer((req, res) => {
  console.log(`${visitors} new connection reached`);
  visitors++;
  var randomwords = rword.generate(5, { length: 5 })
  res.writeHead(200, { 'Content-Type':'text/plain' } );
  randomwords.forEach(
    function(element){
      res.write(`${element}\n`);
    }
  );
  res.write(`We have had ${visitors} visited`);
  res.end();
});
//
server.listen(port);
console.log(`Server running at http://${hostname}:${port}/`);
