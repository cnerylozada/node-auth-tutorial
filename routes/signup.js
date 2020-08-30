const express = require("express");
const { HTTP_STATUS } = require("../utils/utils");
const { User, validateUser } = require("../models/users");
const { createToken, maxAge } = require("../utils/token_methods");
const router = express.Router();

router.get("/", async (req, res) => {
  res.status(HTTP_STATUS.ok).send(req.cookies);
});

router.post("/", async (req, res) => {
  try {
    await validateUser(req.body);
    const user = await new User(req.body).save();
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(HTTP_STATUS.created).send(user);
  } catch (error) {
    res.status(HTTP_STATUS.bad_request).send(error.errors);
  }
});

module.exports = router;
