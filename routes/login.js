const express = require("express");
const { HTTP_STATUS } = require("../utils/utils");
const { User } = require("../models/users");
const { maxAge, createToken } = require("../utils/token_methods");
const router = express.Router();

router.get("/", async (req, res) => {
  res.status(HTTP_STATUS.ok).send("login_page");
});

router.post("/", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(HTTP_STATUS.ok).send(user._id);
  } catch (error) {
    const errorReturned = JSON.parse(error.message);
    res.status(errorReturned.status).send(errorReturned);
  }
});

module.exports = router;
