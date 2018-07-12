var socket = io();

socket.on("connection", (socket)=>{
console.log("New user connected");

socket.emit("createEmail",{
  to: "example@example.com",
  text:"hello"

});
});

socket.emit("createMessage",{
  from: "example@example.com",
  text:"hello"
})
socket.on("newMessage", function (message) {
  console.log("New message", message);
});

socket.on("disconnect", () =>{
  console.log("User disconnected");
});
//custom event
socket.on("newEmail", function (email) {
  console.log("New email", email);
});

socket.emit(("createMessage",{
  from: "example@example.com",
  text:"hello"
}, function () {
  console.log("Got it");
})
