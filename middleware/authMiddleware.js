const jwt = require("jsonwebtoken");
const { HTTP_STATUS } = require("../utils/utils");
const authMiddleware = (req, res, next) => {
  const token = req.cookies.jwt;

  if (token) {
    jwt.verify(token, "net ninja secret", (err, decodeToken) => {
      if (err) {
        res.redirect("/login");
      } else {
        next();
      }
    });
  } else {
    res.status(HTTP_STATUS.forbidden).send("Forbidden content");
  }
};
module.exports = authMiddleware;
