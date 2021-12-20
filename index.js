const express = require("express");
const app = express();
const cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());
//test2
app.use("/manga", express.static("manga"));

const postUser = require("./routes/User");
app.use("/users", postUser);

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
