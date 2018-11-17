const http = require("http");
var config = {
  PORT: 80
};

const server = http.createServer((req,res) => {
  res.write("<center><p>hello from the other <b>pi</b></p></center>");
  res.end();
}).listen(config.PORT, () => console.log("started on port " + config.PORT));
