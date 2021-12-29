const express = require("express");
const router = express.Router();
const sqlConnection = require("./sqlConnection");
const bodyParser = require("body-parser")
const app = express()

//lấy resume reading từ database
router.get("/user/:idUser", (req, res) => {
    // lấy thông tin của manga
    let sql = 'select * from resume_reading where user_idUser=?';
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

//thêm resume reading mới 
router.post("/", (req, res) => {
    let idManga = req.query.idManga
    let idUser = req.query.idUser
    let email = req.query.email
    let idChapter = req.query.idChapter

    let sql = 'insert into resume_reading values (?,?,?,?)';

    sqlConnection(sql, [idManga, idUser, email, idChapter], (err, results) => {
        if (err) {
            res.send('Add resume reading failed');
        } else {
            res.send(results)
        }
    })
})

module.exports = router