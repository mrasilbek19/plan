console.log("Web Serverni Boshlash");
const express = require("express");
const app = express();
const fs = require("fs");
const reqController = require("./req.controller");

// MongoDB call
const db = require("./server").db();
const mongodb = require("mongodb")

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
    if (err) {
        console.log("ERROR:", err);
    }
    else {
        user = JSON.parse(data);
    }
});


app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.set("views", "views");
app.set("view engine", "ejs");


app.post("/create-item",
    reqController.create
);

app.post("/delete-item",
    reqController.delete
);

app.post("/edit-item",
    reqController.editItem
);

app.post("/delete-all",
    reqController.deleteAll
)

app.get("/author", (req, res) => {
    res.render("author", { user: user });
});

app.get("/",
    reqController.getItems
);

module.exports = app;
