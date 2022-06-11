const jwt = require("jsonwebtoken");

module.exports = function tokenCheck(req, res, next) {
  const token = req.header("token");
  if (!token) {
    res.status(401).send("Access denied. No token provided");
    res.end();
  } else {
    try {
      const decoded = jwt.verify(token, "secretKey");
      res.locals.id = decoded.id;
      if (decoded.isBanned) {
        res.status(403).send("banned");
        res.end();
        return;
      }
      next();
    } catch (error) {
      res.status(400).send("Invalid token");
      res.end();
    }
  }
};
