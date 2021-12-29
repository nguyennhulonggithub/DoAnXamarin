const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser")

app.use(
    cors({
        origin: "*",
    })
);
//test
app.use(express.json());

//dùng body-parser làm middle-ware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//link tĩnh
app.use("/m", express.static("manga"));
app.use("/g", express.static("genre"));

//thể loại
const postGenre = require("./routes/Genre")
app.use("/genre", postGenre)

//manga
const postManga = require("./routes/Manga")
app.use("/manga", postManga)

//chapter
const postChapter = require("./routes/Chapter")
app.use("/chapter", postChapter)

//resume_reading
const postResumeReading = require("./routes/ResumeReading")
app.use("/resume_reading", postResumeReading)

// const postGenre = require("/routes/Genre");

const postUser = require("./routes/User");
app.use("/users", postUser);

app.listen(3000, () => {
    console.log("server is running on port 3000");
});
