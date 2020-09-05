const express = require("express");
const { User } = require("../models/users");
const { HTTP_STATUS } = require("../utils/utils");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/", authMiddleware, async (req, res) => {
  const users = await User.find();
  res.status(HTTP_STATUS.ok).send(users);
});

module.exports = router;
