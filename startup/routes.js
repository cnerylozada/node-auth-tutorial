const express = require("express");
const users = require("../routes/users");
const login = require("../routes/login");
const signup = require("../routes/signup");
const cookies = require("../routes/cookies");

module.exports = (app) => {
  app.use(express.json());
  app.use("/api/users", users);
  app.use("/api/login", login);
  app.use("/api/signup", signup);
  app.use("/api/cookies", cookies);
};
