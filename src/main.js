const config = require("dotenv").config().parsed;
const WebSocket = require("ws");
const http = require("http");

console.log(new Date().toLocaleString());

//create http server
http
  .createServer(httpHandler)
  .listen(config.HTTP_PORT, () => console.log(`HTTP:${config.HTTP_PORT}`));
//http server handler
function httpHandler(req, res) {
  //handle get requests
  if (req.method == "GET") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end(
      "<span style='position: absolute; left: 50%; top: 50%; text-align: center; font-family: arial; transform: translateX(-50%) translateY(-50%);'><p>howdy</p></span>"
    );
  }
}

//websocket server
const wss = new WebSocket.Server({ port: config.WS_PORT }, () =>
  console.log(`WS:${config.WS_PORT}`)
);

wss.on("connection", ws => {
  //individual socket
  ws.on("message", d => {
    //socket code
    
  });
});
