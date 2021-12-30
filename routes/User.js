const express = require("express");
const router = express.Router();
const sqlConnection = require("./sqlConnection");

//lấy toàn bộ thông tin user
router.get("/", (req, res) => {
    let sql = "select * from user";
    sqlConnection(sql, (err, results) => {
        if (err) {
            throw err;
        }
        res.send(results);
    });
});

//check user
router.get("/:email", (req, res) => {
    let sql = "select * from user where Email=?";
    sqlConnection(sql, [req.params.email], (err, results) => {
        if (err) {
            res.send(false);
        } else {
            if (results.length == 0) {
                res.send(false);
            } else {
                res.send(true);
            }
        }
    });
});

//lấy thông tin user theo email
router.get("/get/:email", (req, res) => {
    let email = req.params.email;
    let sql = "select * from user where Email=?";
    sql += 'select count(*) as read_later from read_later where user_Email = ?;';
    sql += 'select count(*) as subscribe from subscribe where user_Email = ?;';
    sql += 'select count(*) as likes from likes where user_Email = ?;';
    sqlConnection(sql, [email, email, email, email], (err, results) => {
        if (err) {
            res.send(err);
        } else {
            if (results.length == 0) {
                res.send('User not exist');
            } else {
                res.send(results);
            }
        }
    });
});
// router.delete("/:id", (req, res) => {
//   let sql = "delete from userinfo where UserName=?";
//   sqlConnection(sql, [req.params.id], (err, results) => {
//     if (err) {
//       throw err;
//     } else {
//       res.send("delete success");
//     }
//   });
// });
router.post("/", (req, res) => {
    const postinfo = {
        idUser: req.body.UserId,
        Name: req.body.UserName,
        Email: req.body.UserEmail,
        Image: req.body.UserImage,
    };

    let sql = "insert into user set ?";
    sqlConnection(sql, [postinfo], (err, results) => {
        if (err) {
            console.log(err);
        } else {
            res.send("success");
        }
    });
});

module.exports = router;
