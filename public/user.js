const socket = io();
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", () => {
    const user = document.getElementById("user").value;
    socket.emit("user_connected", user);
    console.log(user);
})

socket.on("user", (userObj) => {
    const userContainer = document.getElementById("users");
    userContainer.innerHTML += `<li>${userObj.user} , ${userObj.time}</li>`;
    
})