const express = require("express");
const router = express.Router();

router.get("/set-cookies", (req, res) => {
  res.cookie("newUser", false);
  res.send("you got the cookies !");
});

router.get("/read-cookies", (req, res) => {
  const cookies = req.cookies;
  res.send(cookies);
  // res.json(cookies);
});

module.exports = router;
