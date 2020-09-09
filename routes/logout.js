const express = require("express");
const { HTTP_STATUS } = require("../utils/utils");
const router = express.Router();

router.get("/", (req, res) => {
  res.cookie("jwt", "", { maxAge: 1 });
  res.status(HTTP_STATUS.ok).send("You are out!");
});

module.exports = router;
