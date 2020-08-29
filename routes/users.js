const express = require("express");
const { Users, validateUser } = require("../models/users");
const { HTTP_STATUS } = require("../utils/utils");
const router = express.Router();

router.get("/", async (req, res) => {
  const users = await Users.find();
  res.status(HTTP_STATUS.ok).send(users);
});

router.post("/", async (req, res) => {
  try {
    await validateUser(req.body);
    const user = await new Users(req.body).save();
    res.status(HTTP_STATUS.created).send(user);
  } catch (error) {
    res.status(HTTP_STATUS.bad_request).send(error.errors);
  }
});

module.exports = router;
