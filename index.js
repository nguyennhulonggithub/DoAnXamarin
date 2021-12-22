const express = require("express");
const app = express();
const cors = require("cors");
app.use(
    cors({
        origin: "*",
    })
);
//test
app.use(express.json());

//link tĩnh
app.use("/m", express.static("manga"));
app.use("/g", express.static("genre"));

//thể loại
const postGenre = require("./routes/Genre")
app.use("/genre", postGenre)

// const postGenre = require("/routes/Genre");

const postUser = require("./routes/User");
app.use("/users", postUser);

app.listen(3000, () => {
    console.log("server is running on port 3000");
});
