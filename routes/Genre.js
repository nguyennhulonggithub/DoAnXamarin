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

//Genre title
//Horror title, Comedy title,....
router.get("/:nameGenre", (req, res) => {
    let sql = 'call Genre_title(?)'
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

//Trending in genre
//Lấy theo Hot is not null
router.get("/:nameGenre/trending", (req, res) => {
    let sql = 'call Genre_trending(?)'
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

//Highlighted titles
//Lấy theo New, Hot, Save is not null
router.get("/:nameGenre/highlight_title", (req, res) => {
    let sql = 'call Genre_highlight_title(?)';
    sqlConnection(sql, [req.params.nameGenre], (err, results) => {
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

//Top new titles
//Lấy theo DateAdded 
router.get("/:nameGenre/top_new_title", (req, res) => {
    let sql = 'call Genre_top_new_title(?)';
    sqlConnection(sql, [req.params.nameGenre], (err, results) => {
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

//Trending today
//Lấy theo WeekView
router.get("/:nameGenre/trending_today", (req, res) => {
    let sql = 'call Genre_trending_today(?)';
    sqlConnection(sql, [req.params.nameGenre], (err, results) => {
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

//All time popular
//Lấy theo TotalView
router.get("/:nameGenre/all_time_popular", (req, res) => {
    let sql = 'call Genre_all_time_popular(?)';
    sqlConnection(sql, [req.params.nameGenre], (err, results) => {
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

module.exports = router;
