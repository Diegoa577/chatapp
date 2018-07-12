//https://developer.mozilla.org/es/docs/WebAPI/Using_geolocation

//custom message envia los datos
//server to client
socket.emit("newEmail", {
  from: "mike@example.com",
  text: "Heyy",
  createAt: 123
});

socket.emit("newMessage", {
  from: "mike@example.com",
  text: "Heyy",
  createAt: 123
});

socket.on("createMessage", (newMessage) =>{
  console.log("createMessage", newMessage);
  //io.emit event every single connection
  io.emit("newMessage",{
    from: message.from,
    text: message.text,
    createdAt: new Date().getTime()
  })
})
//client to server
socket.on("createEmail", (newEmail) =>{
  console.log("createEmail", newEmail);
})


//send everybody pero no para uno
// socket.broadcast.emit("newMessage",{
//   from: message.from,
//   text: message.text,
//   createdAt: new Date().getTime()
// })




io.on("connection", (socket)=>{
console.log("New user connected");

socket.emit("newMessage",{
  from: "Admin",
  text: "Welcome to the chat app",
});

socket.broadcast.emit("newMessage",{
  from: "Admin",
  text: "New user joined",
  createdAt: new Date().getTime()
});




socket.on("createMessage", (newMessage) =>{
  console.log("createMessage", newMessage);
  //io.emit event every single connection
  io.emit("newMessage",{
    from: message.from,
    text: message.text,
    createdAt: new Date().getTime()
  })
  //send everybody pero no para uno
  // socket.broadcast.emit("newMessage",{
  //   from: message.from,
  //   text: message.text,
  //   createdAt: new Date().getTime()
  // })
})

socket.on("disconnect", () =>{
  console.log("User disconnected");
});
