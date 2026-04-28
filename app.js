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


app.use(express.static("public")); 
app.use(express.json());
app.use(express.urlencoded({extended: true})); 


app.set("views", "views");
app.set("view engine", "ejs");


app.post("/create-item", (req,res) =>{
   console.log("user entered to /create-item");
   const new_reja = req.body.reja;
   db.collection("plans").insertOne({reja: new_reja} , (err, data)=>{
    if(err){
        console.log(err);
        res.end('somethind went wrong');
    }else{
     res.end('successfully added')
    }
   });
});

app.get("/author", (req, res) =>{
    res.render("author",{user: user});
});

app.get("/", function(req, res){
    console.log("user entered to /")
    db.collection("plans").find().toArray((err, data) => {
        if(err){
            console.log(err);
            res.end("something went wrong");
        } else{
            res.render("reja", {items: data});
        }     
    });
});

module.exports = app;
