var WebSocket = require('ws');
var WebSocketServer = WebSocket.Server;
var port = 3001;
var ws = new WebSocketServer({
    port: port
});
console.log('Websockets server started');

var messages = [];

ws.on('connection', function(socket) {
    console.log('client connectoin established');
    messages.forEach(function(msg) {
        socket.send(msg);
    });
    socket.on('message', function(data) {
        messages.push(data);
        ws.clients.forEach(function(clientSocket) {
            clientSocket.send(data);
        });
    });
});
