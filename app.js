var express = require('express');
var app = express();
var port = 3000;

app.use(express.static('public'));
app.use(express.static('src/views'));

app.get("/", (req,res)=>{
    res.send("Ben, I need your help, I'm from the future.");
});

app.get("/games", (req,res)=>{
    res.send("Do you wanna play a game");
});

//Listen on the port
app.listen(port, e=>{
    console.log("Server is running");
});