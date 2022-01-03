const express = require("express");
const router = express.Router();
const sqlConnection = require("./sqlConnection");

//lấy banner từ database
router.get("/", (req, res) => {
  let sql = "select * from banner";
  sqlConnection(sql, (err, results) => {
    if (err) {
      res.send("No banner");
    } else {
      if (results.length == 0) {
        res.send("User not reading yet");
      } else {
        res.send(results);
      }
    }
  });
});

module.exports = router;
