const jwt = require("jsonwebtoken");

const maxAge = 2 * 60;

const createToken = (id) => {
  return jwt.sign({ id }, "net ninja secret", {
    expiresIn: maxAge,
  });
};

module.exports = { maxAge, createToken };
