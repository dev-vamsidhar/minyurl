const Auth = require("../../../models/Authentication/authmodel");
const jwt = require("jsonwebtoken");
function login(req, res) {
  uid = encodeURI(req.query.uid);
  console.log(uid);
  password = req.query.password;
  if (uid === undefined) {
    res.status(200).send({ status: "No Email id is provided" });
  } else if (password === undefined) {
    res.status(200).send({ status: "Password is not provided" });
  }
  res.send({ status: "success" });
  Auth.findOne({ uid: decodeURI(uid) }).then((result) => {
    console.log(result);
    if (!result) {
      res.status(200).send({
        status: "User not found",
      });
      return;
    } else if (result._doc.password === password) {
      const token = jwt.sign(
        {
          uid: uid,
        },
        "secretKey"
      );
      res
        .status(200)
        .send({ status: "User logged in sucessfully", token: token });
    } else {
      res.status(200).send({
        status: "Password error",
        uid: result._doc.uid,
      });
    }
  });
}

module.exports = login;
