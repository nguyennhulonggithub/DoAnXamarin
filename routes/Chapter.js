const express = require("express");
const router = express.Router();
const sqlConnection = require("./sqlConnection");
const fs = require("fs");
var sizeOf = require("image-size");

//show toàn bộ image trong chapter
router.get("/:idChapter", (req, res) => {
  let img = [];
  let sql = "select * from chapter where idChapter=?";
  sqlConnection(sql, [req.params.idChapter], (err, results) => {
    if (err) {
      res.send("Chapter not exist");
    } else {
      if (results.length == 0) {
        res.send("Chapter not exist");
      } else {
        let idManga = results[0].manga_idManga;
        let order = results[0].Order;
        let path = "./manga/" + idManga + "/chap";
        if (order != 1) {
          path = path + " (" + order + ")";
        }
        fs.readdir(path, (err, files) => {
          if (err) {
            console.log(err);
          } else {
            if (order == 1) {
              console.log("hi");
              files.forEach((file) => {
                let cur_path = idManga + "/chap/" + file;
                img.push("/m/" + cur_path);
              });
              res.send(img);
            } else {
              console.log("ho");
              files.forEach((file) => {
                let cur_path = idManga + "/chap (" + order + ")/" + file;

                img.push("/m/" + cur_path);
              });
              res.send(img);
            }
          }
        });
      }
    }
  });
});

module.exports = router;
