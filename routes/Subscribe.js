const express = require("express");
const router = express.Router();
const sqlConnection = require("./sqlConnection");

//lấy subscribe từ database
router.get("/user/:idUser", (req, res) => {

    let sql = 'select count(manga_idManga) as subscribe from subscribe where user_idUser=?';
    sqlConnection(sql, [req.params.idUser], (err, results) => {
        if (err) {
            res.send('User not exist');
        } else {
            if (results.length == 0) {
                res.send('User not reading yet');
            } else {
                res.send(results);
            }
        }
    })
})

//thêm subscribe vào database
router.post("/add", (req, res) => {
    let idManga = req.body.idManga
    let idUser = req.body.idUser

    let sql = 'call Add_subscribe(?,?)';

    sqlConnection(sql, [idUser, idManga], (err, results) => {
        if (err) {
            res.send('Add subscribe failed');
        } else {
            res.send(results)
        }
    })
})

//xóa subscribe khỏi database
router.delete('/delete', (req, res) => {
    let idManga = req.body.idManga
    let idUser = req.body.idUser

    let sql = 'delete from subscribe where user_idUser = ? and manga_idManga = ?;';

    sqlConnection(sql, [idUser, idManga], (err, results) => {
        if (err) {
            res.send('Delete subscribe failed');
        } else {
            res.send(results)
        }
    })
})

module.exports = router;