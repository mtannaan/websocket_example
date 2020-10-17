// WebSocketのサーバの生成
const ws = require("ws");
const fs = require("fs");
const https = require("https");

const httpsServer = https
  .createServer(
    {
      cert: fs.readFileSync("ssl/server.crt"),
      key: fs.readFileSync("ssl/server.key"),
    },
    function (req, res) {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Hello, world\n");
    }
  )
  .listen(5443);

const wsServer = new ws.Server({ port: 5080 });
const wssServer = new ws.Server({ server: httpsServer });

[wsServer, wssServer].forEach((server) => {
  console.log(`ws server started!`);

  // 接続時に呼ばれる
  server.on("connection", (sock, req) => {
    console.log(`connection opened: ${req.connection.remoteAddress}`);
    // クライアントからのデータ受信時に呼ばれる
    sock.on("message", (message) => {
      console.log(message);

      // クライアントにデータを返信
      server.clients.forEach((client) => {
        client.send(message);
      });
    });

    // 切断時に呼ばれる
    sock.on("close", () => {
      console.log("close");
    });
  });
});
