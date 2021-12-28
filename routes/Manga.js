const express = require("express");
const router = express.Router();
const sqlConnection = require("./sqlConnection");
const fs = require('fs');

//show toàn bộ manga
router.get("/", (req, res) => {
    let sql = 'select * from manga';
    sqlConnection(sql, (err, results) => {
        if (err) {
            throw err;
        }
        res.send(results);
    });
})

//show thông tin manga theo id
router.get("/:idManga", (req, res) => {
    // lấy thông tin của manga
    let sql = 'select * from manga where idManga=?';
    sqlConnection(sql, [req.params.idManga], (err, results) => {
        if (err) {
            res.send(false);
        } else {
            idManga = req.params.idManga
            if (results.length == 0) {
                res.send('Manga not exist');
            } else {
                res.send(results);
            }
        }
    })
})

//show toàn bộ chapter trong manga
router.get("/:idManga/chapter", (req, res) => {
    let sql = 'select * from chapter where manga_idManga=?';
    sqlConnection(sql, [req.params.idManga], (err, results) => {
        if (err) {
            res.send('Chapter or Manga not exist');
        } else {
            idManga = req.params.idManga
            if (results.length == 0) {
                res.send('Chapter not exist');
            } else {
                res.send(results);
            }
        }
    })
})

// router.gett("/:idManga/c/:idChapter", (req, res) => {
//     sql
// })

module.exports = router;