const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const { Server } = require("socket.io");
const path = require("path");
const io = new Server(server);

var users = [];

//socket server..

io.on("connection", (socket) => {
  console.log("A new User Connected..", socket.id);
  
  socket.on("user_connected", (user) => {
    console.log(user, " : has joined the chat ");
    //save in database..
    //socket.broadcast.emit("user_connected", username); //send to all connected users except sender
    users.push({ id: socket.id, name: user });
    io.emit("user", {user:user,time:new Date().toLocaleTimeString()});
  });
  




  socket.on("user_message", (message) => {
    console.log(message);
    //socket.broadcast.emit("user_message",message);
    io.emit("user_message", message);
  });
});

app.use(express.static(path.resolve("./public")));
app.get("/", (req, res) => {
  return res.sendFile("index.html");
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
