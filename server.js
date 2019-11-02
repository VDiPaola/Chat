const io = require("socket.io")(3000);

io.on("connection", socket=>{
    socket.on("send-message", (data)=>{
        socket.broadcast.emit("chat-message", data);
    })
})