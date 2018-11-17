const http = require("http");
var config = {
  PORT: 80
};

const server = http.createServer((req,res) => {
  res.write("hello from the other pi(de)");
  res.end();
}).listen(config.PORT, () => console.log("started on port " + config.PORT));
