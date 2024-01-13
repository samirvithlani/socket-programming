const express = require('express');
const app = express();
const http = require('http')
const server = http.createServer(app);
const {Server} = require('socket.io');
const path = require('path');
//abosolute path
app.use(express.static(path.resolve("./public")))


const io = new Server(server)
io.on("connection",(socket)=>{
    console.log("new user connected",socket.id)

    socket.on("user_joined",(data)=>{
        const http = require("http");
const express = require("express");
const app = express();
const path = require("path")
const {Server} = require("socket.io")

const server = http.createServer(app);

//Socket.io
const io = new Server(server)

//create a connection with io
io.on("connection",(socket)=>{
    console.log("A new User connected",socket.id)
    socket.on("user-message",(data)=>{
        console.log(data) 
    })
})


//set view engine
app.use(express.static(path.resolve("./public")))


app.get("/",(req,res)=>{

    return  res.sendFile("./public/index.html")
})



server.listen(3000, () => console.log("Server is running..."));
console.log(data)
        //socket.broadcast.emit("user_joined",data)
        socket.emit("user_joined",data)
    })

    socket.on("message",(data)=>{
        console.log(data)
        socket.broadcast.emit("message",data)
        socket.emit("message",data)
    })

})




app.get("/",(req,res)=>{

    return res.sendFile("index.html")

})

server.listen(3000, () => {
    console.log('Server running on port 3000');
})
