const Auth = require("../../../models/Authentication/authmodel");
const jwt = require("jsonwebtoken");
function signup(req, res) {
  uid = req.query.uid;
  password = req.query.password;
  username = req.query.username;
  if (uid === undefined) {
    res.status(403).send("No Email id is provided");
  } else if (password === undefined) {
    res.status(403).send("Password is not provided");
  }
  Auth.findOne({ uid: uid }).then((result) => {
    if (result == null) {
      Auth.create({ uid: uid, password: password, username: username }).then(
        (result) => {
          const token = jwt.sign(
            {
              uid: uid,
            },
            "secretKey"
          );
          res.status(200).send({ status: "Signup Sucessfull", token: token });
        }
      );
    } else {
      res.status(200).send({
        status: "User already exists",
        // uid: result._doc.uid,
      });
    }
  });
}

module.exports = signup;
