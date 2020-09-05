const jwt = require("jsonwebtoken");
const { HTTP_STATUS } = require("../utils/utils");
const authMiddleware = (req, res, next) => {
  const token = req.cookies.jwt;

  if (token) {
    jwt.verify(token, "net ninja secret", (err, decodeToken) => {
      if (err) res.status(HTTP_STATUS.forbidden).send("Forbidden content");
      console.log(decodeToken);
      next();
    });
  } else
    res
      .status(HTTP_STATUS.bad_request)
      .send("Access denied. No token provided");
};
module.exports = authMiddleware;
