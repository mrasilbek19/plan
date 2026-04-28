console.log("Web Serverni Boshlash");
const express = require("express");
const res = require("express/lib/response");
const app = express();
const fs = require("fs");

// MongoDB call
const db = require("./server").db();

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

app.use(express.static("public")); 
app.use(express.json());
app.use(express.urlencoded({extended: true})); 


app.set("views", "views");
app.set("view engine", "ejs");


app.post("/create-item", (req,res) =>{
   //To do something 
});

app.get("/author", (req, res) =>{
    res.render("author",{user: user});
});

app.get("/", function(req, res){
    res.render("reja");
});

module.exports = app;
