const db = require("./server").db();
const mongodb = require("mongodb")

const reqController = {};

reqController.create = (req, res) => {
    console.log("user entered to /create-item");
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
        //console.log(data.ops)
        res.json(data.ops[0]);
    });
}


reqController.delete = (req, res) => {
    const id = req.body.id;
    //console.log(id);
    db.collection("plans").deleteOne({ _id: new mongodb.ObjectId(id) }, function (err, data) {
        res.json({ state: "success" });
    })
}


reqController.editItem = (req, res) => {
    const data = req.body;
    db.collection("plans").findOneAndUpdate({ _id: new mongodb.ObjectId(data.id) },
        { $set: { reja: data.new_input } },
        function (err, data) {
            res.json({ state: "success" });
        }
    )
}

reqController.deleteAll = (req, res) => {
    console.log("user deleted everything")
    if (req.body.delete_all) {
        db.collection("plans").deleteMany(function () {
            res.json({ state: "all plans deleted" });
        })
    }
}

reqController.getItems = function (req, res) {
    console.log("user entered to /")
    db.collection("plans").find().toArray((err, data) => {
        if (err) {
            console.log(err);
            res.end("something went wrong");
        } else {
            res.render("reja", { items: data });
        }
    });
}


module.exports = reqController;
