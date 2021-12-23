const express = require("express");
const router = express.Router();
const sqlConnection = require("./sqlConnection");

//show toàn bộ thể loại
router.get("/", (req, res) => {
    let sql = 'select * from category';
    sqlConnection(sql, (err, results) => {
        if (err) {
            throw err;
        }
        res.send(results);
    });
})

module.exports = router;