const http = require("http");
const app = require("./app");
const mongodb = require("mongodb")

let db;
const connectionString = "mongodb+srv://Alex1903:XmMMVUp0IP7fakll@cluster0.ed6u0nb.mongodb.net/Reja";

mongodb.connect(connectionString,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, (err, client) => {
    if(err) console.log("Error on connection to Mongodb");
    else{
        
        console.log("Connection to Mongodb succeed");

        module.exports = client;
        
        const server = http.createServer(app);
        let PORT = 3000;
        server.listen(PORT, function(){
        console.log(
            `The server is running successfully on port ${PORT}, http://localhost:${PORT}`
        );
});
    }
});



