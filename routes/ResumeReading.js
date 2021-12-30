const express = require("express");
const router = express.Router();
const sqlConnection = require("./sqlConnection");
const bodyParser = require("body-parser");
const { json } = require("body-parser");
const app = express()

//lấy resume reading từ database
router.get("/user/:idUser", (req, res) => {
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
    let idManga = req.body.idManga
    let idUser = req.body.idUser
    let email = req.body.email
    let idChapter = req.body.idChapter

    let sql = 'call AddResumeReading (?,?,?,?)';

    sqlConnection(sql, [idManga, idUser, email, idChapter], (err, results) => {
        if (err) {
            res.send('Add resume reading failed');
        } else {
            res.send(results)
        }
    })
})

module.exports = router