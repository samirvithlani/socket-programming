

const socket = io();
const message = document.getElementById("message");
const sendBtn = document.getElementById("send");
const messages = document.getElementById("messages");
const user = document.getElementById("user");

sendBtn.addEventListener("click", () => {
  const msg = message.value;
  socket.emit("message", msg);
});
socket.on("message", (msg) => {
  const p = document.createElement("p");
  p.innerHTML = msg;
  messages.appendChild(p);
  //console.log(msg);
});

socket.on("user_joined",(data)=>{

    console.log("user joined....",data)
    const p  = document.createElement("p")
    p.innerHTML = uName + " joined the chat"
    user.appendChild(p)
})
