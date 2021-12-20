const express = require("express");
const router = express.Router();
const sqlConnection = require("./sqlConnection");

router.get("/", (req, res) => {
  let sql = "select * from user";
  sqlConnection(sql, (err, results) => {
    if (err) {
      throw err;
    }
    res.send(results);
  });
});
router.get("/:id", (req, res) => {
  let sql = "select * from user where Email=?";
  sqlConnection(sql, [req.params.id], (err, results) => {
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
