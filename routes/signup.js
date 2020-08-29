const express = require("express");
const { HTTP_STATUS } = require("../utils/utils");
const { Users, validateUser } = require("../models/users");
const router = express.Router();

router.get("/", async (req, res) => {
  res.status(HTTP_STATUS.ok).send("signup_page");
});

router.post("/", async (req, res) => {
  try {
    await validateUser(req.body);
    const user = await new Users(req.body).save();
    res.status(HTTP_STATUS.created).send(user);
  } catch (error) {
    res.status(HTTP_STATUS.bad_request).send(error);
  }
});

module.exports = router;
