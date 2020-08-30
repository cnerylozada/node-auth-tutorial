const express = require("express");
const { User } = require("../models/users");
const { HTTP_STATUS } = require("../utils/utils");
const router = express.Router();

router.get("/", async (req, res) => {
  const users = await User.find();
  res.status(HTTP_STATUS.ok).send(users);
});

module.exports = router;
