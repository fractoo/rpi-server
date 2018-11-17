const http = require("http");
var config = {
  PORT: 80
};
console.log("starting...");

const server = http.createServer();

server.on("connection", (req, res) => {
  console.log(req);
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("<center><p>hello world</p></center>");
  res.end();
}).listen(config.PORT);
