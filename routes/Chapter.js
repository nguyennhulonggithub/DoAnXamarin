const express = require("express");
const router = express.Router();
const sqlConnection = require("./sqlConnection");
const fs = require('fs');

//show toàn bộ image trong chapter
let path = './manga/gantz/chap'
router.get("/:idChapter", (req, res) => {
    let img = []
    let sql = 'select manga_idManga from chapter where idChapter=?'
    sqlConnection(sql, [req.params.idChapter], (err, results) => {
        if (err) {
            res.send('Chapter not exist');
        } else {
            if (results.length == 0) {
                res.send('Chapter not exist');
            } else {

                let idManga = results[0].manga_idManga
                let path = './manga/' + idManga + '/chap'

                console.log("11231231313111231")
                fs.readdir(path, (err, files) => {
                    if (err) {
                        console.log(err)
                        console.log(path)
                    } else {
                        files.forEach(file => {
                            img.push('localhost:3000/m/' + idManga + '/chap/' + file)
                        })
                        res.send(img)
                    }
                })
            }
        }
    })

});

module.exports = router;