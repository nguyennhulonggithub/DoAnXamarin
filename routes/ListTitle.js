const express = require("express");
const router = express.Router();
const sqlConnection = require("./sqlConnection");

//new title for you
//lấy theo DateAdded
router.get("/new_title", (req, res) => {
    let sql = 'select idManga, Name, TotalView, Status, Description from manga order by DateAdded desc limit 10';
    sqlConnection(sql, (err, results) => {
        if (err) {
            res.send(err)
        } else {
            if (results.length == 0) {
                res.send('No manga available');
            } else {
                res.send(results);
            }
        }
    });
})

//top pick for you
//lấy theo WeekView
router.get("/top_pick", (req, res) => {
    let sql = 'select idManga, Name, TotalView, Status, Description from manga order by WeekView desc limit 10';
    sqlConnection(sql, (err, results) => {
        if (err) {
            res.send(err)
        } else {
            if (results.length == 0) {
                res.send('No manga available');
            } else {
                res.send(results);
            }
        }
    });
})


module.exports = router