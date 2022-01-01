const express = require("express");
const router = express.Router();
const sqlConnection = require("./sqlConnection");

//show toàn bộ thể loại
router.get("/", (req, res) => {
  let sql = "select * from category";
  sqlConnection(sql, (err, results) => {
    if (err) {
      throw err;
    }
    res.send(results);
  });
});

//show theo thể loại
router.get("/:nameGenre", (req, res) => {
  let sql =
    "select idManga, Name, TotalView, Status, Description, 0 + (select count(*) from chapter where manga_idManga= idManga) as count_chapter from manga join (select manga_idManga from category c join manga_category m on c.idCategory = m.category_idCategory where c.Name = ?) as s on manga.idManga = s.manga_idManga";
  sqlConnection(sql, [req.params.nameGenre], (err, results) => {
    if (err) {
      res.send("Genre not exist");
    } else {
      if (results.length == 0) {
        res.send("Not having any manga in this genre");
      } else {
        res.send(results);
      }
    }
  });
});

module.exports = router;
