console.log("Web Serverni Boshlash");
const express = require("express");
const app = express();
const http = require("http");

// 4ta bosqich bor 

// 1: Kirish code

app.use(express.static("public")); //brauserda qelgan har qanday requestga public folder ochiq 
app.use(express.json()); //json formatdagi data objda ugirib beradi
app.use(express.urlencoded({extended: true})); // yozmasak HTML FORMdan kelgan narsalarni qabul qilmaydi


// 2: Sessionga boglik hozircha qilmaymiz

// 3: View code

app.set("views", "views");
app.set("view engine", "ejs");

// 4: Routing codes

app.get("/hello", function(req, res){
    //res.end(`<h1>Hello World</h1>`);
    res.send(`<h1>Hello World</h1>`);
});

app.get("/gift", function(req, res){
    //res.end(`<h1>You are in gift page</h1>`);
    res.send(`<h1>You are in gift page</h1>`);
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function(){
    console.log(`The server is running successfully on port ${PORT}`);
})