

const socket = io();
const message = document.getElementById("message");
const sendBtn = document.getElementById("send");
const messages = document.getElementById("messages");
const user = document.getElementById("user");

const userName = document.getElementById("username");
const loginBtn = document.getElementById("login");


sendBtn.addEventListener("click", () => {
  const msg = message.value;
  socket.emit("user_message", msg);
});
socket.on("user_message", (msg) => {
  const p = document.createElement("p");
  p.innerHTML = msg;
  messages.appendChild(p);
  //console.log(msg);
});


// socket.on("user_connected",(data)=>{

//     console.log("user joined....",data)
//     const p  = document.createElement("p")
//     p.innerHTML = "joined the chat"
//     user.appendChild(p)
// })
