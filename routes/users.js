const express = require("express");
const { Users } = require("../models/users");
const { HTTP_STATUS } = require("../utils/utils");
const router = express.Router();

router.get("/", async (req, res) => {
  const users = await Users.find();
  res.status(HTTP_STATUS.ok).send(users);
});

module.exports = router;
