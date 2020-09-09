const express = require("express");
const users = require("../routes/users");
const signup = require("../routes/signup");
const login = require("../routes/login");
const logout = require("../routes/logout");
const cookies = require("../routes/cookies");

module.exports = (app) => {
  app.use(express.json());
  app.use("/api/users", users);
  app.use("/api/signup", signup);
  app.use("/api/login", login);
  app.use("/api/logout", logout);
  app.use("/api/cookies", cookies);
};
