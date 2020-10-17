// WebSocketのサーバの生成
let ws = require('ws')
var server = new ws.Server({port:5001});

console.log(`server started! Listening to port ${server.options.port}`)

// 接続時に呼ばれる
server.on('connection', (sock, req) => {
    console.log(`connection opened: ${req.connection.remoteAddress}`)
    // クライアントからのデータ受信時に呼ばれる
    sock.on('message', message => {
        console.log(message);

        // クライアントにデータを返信
        server.clients.forEach(client => {
            client.send(message);
        });
    });

    // 切断時に呼ばれる
    sock.on('close', () => {
        console.log('close');
    });
});
