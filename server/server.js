const path = require('path');
const express = require('express');

var app = express();
const port = process.env.PORT || 3000;

const publicPath = path.join(__dirname, "../public");
// console.log(__dirname + "/../public");
// console.log(publicPath);

app.use(express.static(publicPath))

app.listen(port, () =>{
  console.log(`Started on port ${port}`);
});


module.exports = {app};
