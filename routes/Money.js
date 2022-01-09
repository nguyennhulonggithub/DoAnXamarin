const express = require("express");
const router = express.Router();
const sqlConnection = require("./sqlConnection");

//mua manga
//sau khi mua thì trừ tiền trong database và mở manga đó, tính là đã trả
router.post("/buy", (req, res) => {
    let sql = 'insert into pay values (?,?);'
    sqlConnection(sql, [req.body.idChapter, req.body.idUser], (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.send(results);
        }
    });
})

//lấy tiền từ database
router.get("/get/:idUser", (req, res) => {
    let sql = 'select Coin from user where idUser =?;'
    sqlConnection(sql, [req.params.idUser], (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.send(results);
        }
    });
})

//lưu tiền
router.post("/save/:idUser", (req, res) => {
    let sql = 'update pay '
})

module.exports = router;