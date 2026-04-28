console.log("Web Serverni Boshlash");
const express = require("express");
const res = require("express/lib/response");
const app = express();
const http = require("http");
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf8", (err, data)=>{
    if(err){
        console.log("ERROR:", err);
    }
    else{
        user = JSON.parse(data);
    }
});

// 4ta bosqich bor 

// 1: Kirish code

app.use(express.static("public")); //brauserda qelgan har qanday requestga public folder ochiq 
app.use(express.json()); //json formatdagi data objda ugirib beradi
app.use(express.urlencoded({extended: true})); // yozmasak HTML FORMdan kelgan narsalarni qabul qilmaydi


// 2: Sessionga boglik hozircha qilmaymiz

// 3: View code SSR orqali

app.set("views", "views");
app.set("view engine", "ejs");

// 4: Routing codes
app.post("/create-item", (req,res) =>{
   //To do something 
});

app.get("/author", (req, res) =>{
    res.render("author",{user: user});
});

app.get("/", function(req, res){
    res.render("reja");
});


const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function(){
    console.log(`The server is running successfully on port ${PORT}, http://localhost:${PORT}`);
})