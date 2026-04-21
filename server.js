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

// 3: View code SSR orqali

app.set("views", "views");
app.set("view engine", "ejs");

// 4: Routing codes
app.post("/create-item", (req,res) =>{
    console.log(req);
    res.json({test: "sucsess"})
})

app.get("/", function(req, res){
    res.render("harid");
});


const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function(){
    console.log(`The server is running successfully on port ${PORT}`);
})