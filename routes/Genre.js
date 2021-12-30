const express = require("express");
const router = express.Router();
const sqlConnection = require("./sqlConnection");

//show toàn bộ thể loại
router.get("/", (req, res) => {
    let sql = 'select * from category';
    sqlConnection(sql, (err, results) => {
        if (err) {
            throw err;
        }
        res.send(results);
    });
})

//show theo thể loại
router.get("/:nameGenre", (req, res) => {
    let sql = 'select * from manga where idManga in (select idManga from category c join manga_category m on c.idCategory = m.category_idCategory where c.Name = ?)';
    sqlConnection(sql, [req.params.nameGenre], (err, results) => {
        if (err) {
            res.send('Genre not exist');
        } else {
            if (results.length == 0) {
                res.send('Not having any manga in this genre');
            } else {
                res.send(results);
            }
        }
    })
})

module.exports = router;