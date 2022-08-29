const Auth = require("../../../models/Authentication/authmodel");
const jwt = require("jsonwebtoken");
function login(req, res) {
  console.log(req.query);
  uid = req.query.uid;
  password = req.query.password;
  if (uid === undefined) {
    res.status(403).send("No Email id is provided");
  } else if (password === undefined) {
    res.status(403).send("Password is not provided");
  }
  Auth.findOne({ uid: uid }).then((result) => {
    if (result == null) {
      res.status(403).send("User not found");
    }
    if (result._doc.password === password) {
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
