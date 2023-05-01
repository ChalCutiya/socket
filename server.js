const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);


io.on('connection', socket => {
    console.log(socket.id);
    
    socket.on("broadcast", msg => {
        console.log(msg, socket.id);
        socket.broadcast.emit("broadcast", msg)
        // io.emit("broadcast", msg)
    });
})




app.get('/', (req, resp) => {
    resp.sendfile('index.html');
})

server.listen(3000);