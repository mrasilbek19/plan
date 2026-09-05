const http = require("http");
const dotenv = require("dotenv");
dotenv.config();

const mongodb = require("mongodb")

let db;
const connectionString = process.env.MONGO_URL;

mongodb.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, (err, client) => {
    if (err) console.log("Error on connection to Mongodb");
    else {

        console.log("Connection to Mongodb succeed");

        module.exports = client;
        const app = require("./app");

        const server = http.createServer(app);
        let PORT = 3009;
        server.listen(PORT, function () {
            console.log(
                `The server is running successfully on port ${PORT}, http://localhost:${PORT}`
            );
        });
    }
});



