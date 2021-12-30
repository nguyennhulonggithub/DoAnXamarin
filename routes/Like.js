const express = require("express");
const router = express.Router();
const sqlConnection = require("./sqlConnection");

//lấy like từ database
router.get("/user/:idUser", (req, res) => {

    let sql = 'select count(manga_idManga) from heroku_18906e98f1e20f7.like where user_idUser=?';
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

//thêm like vào database
router.post("/add")

//xóa like khỏi database
router.post('/remove', (req, res) => {
    let idManga = req.body.idManga
    let idUser = req.body.idUser
    let email = req.body.email

    let sql = 'delete from heroku_18906e98f1e20f7.like where user_idUser = ? and user_Email=? and manga_idManga = ?';

    sqlConnection(sql, [idUse, email, idManga], (err, results) => {
        if (err) {
            res.send('Delete like failed');
        } else {
            res.send(results)
        }
    })
})

module.exports = router;