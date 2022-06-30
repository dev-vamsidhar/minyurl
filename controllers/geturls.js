const jwt = require("jsonwebtoken");
const shortUrlModel = require("../models/shorturlmodel");
getAllUrls = (req, res) => {
  const token = req.header("token");
  const decoded = jwt.verify(token, "secretKey");
  const uid = decoded.uid;
  console.log(uid);
  shortUrlModel
    .find({ uid: uid })
    .then((val) => {
      console.log(val);
      res.status(200).json({
        data: val,
        uid: uid,
        token: token,
      });
    })
    .catch((err) => {
      res.status(401).send({
        data: [],
        uid: uid,
        token: token,
      });
    });
};

module.exports = getAllUrls;
