const http = require("http");
var config = {
  PORT: 80
};

const server = http.createServer((req,res) => {
  res.writeHead(200, {"Content-Type": "text/html"});
  res.write("<center><p style='font-family: arial'>hello from the other <b>pi</b></p></center>");
  res.end();
}).listen(config.PORT, () => console.log("started on port " + config.PORT));
