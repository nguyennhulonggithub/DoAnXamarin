const express = require("express");
const router = express.Router();
const sqlConnection = require("./sqlConnection");
const bodyParser = require("body-parser");
const { json } = require("body-parser");
const app = express()

//lấy resume reading từ database
router.get("/user/:idUser", (req, res) => {
    let sql = 'call Get_resume_reading(?)';
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
router.post("/add", (req, res) => {
    let data = req.body;
    let length = Object.keys(data).length;
    let idManga, idUser, idChapter, time_read, percent_read, total_height;
    let statement;
    let sql = '';

    for (let i = 0; i < length; i++) {
        idManga = String(data[i].idManga);
        idUser = String(data[i].idUser);
        idChapter = String(data[i].chapterId);
        percent_read = String(data[i].percent_read);
        time_read = String(data[i].time_read);
        total_height = String(data[i].total_height);

        statement = 'replace into resume_reading (manga_idManga,user_idUser, chapter_idChapter, time_read, percent_read, total_height) values (' + idManga + ',' + idUser + ',' + idChapter + ',' + time_read + ',' + percent_read + ',' + total_height + ');';
        sql += statement + "\n";
    }

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

module.exports = router