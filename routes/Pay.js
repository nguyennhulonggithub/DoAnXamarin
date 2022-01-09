const express = require("express");
const router = express.Router();
const sqlConnection = require("./sqlConnection");

router.get("/get")