const http = require("http");
var config = {
  PORT: 80
};

const server = http.createServer((req,res) => {
  res.write("hello world");
  res.end();
}).listen(config.PORT);
