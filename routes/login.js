const express = require("express");
const { HTTP_STATUS } = require("../utils/utils");
const router = express.Router();

router.get("/", async (req, res) => {
  res.status(HTTP_STATUS.ok).send("login_page");
});

router.post("/", async (req, res) => {});

module.exports = router;
