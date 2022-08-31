var shortUrlModel = require("../models/shorturlmodel");
function makeid(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function shorturl(req, res) {
  longurl = req.body.longurl;
  shorturl = req.body.shorturl;
  if (longurl === "") {
    res.status(200).send({ status: "LongUrl feild is not optional" });
    return;
  }
  if (req.body.uid === "") {
    res
      .status(200)
      .send({ status: "Something went wrong. Please logout and login back" });
    return;
  }
  if (shorturl === "") {
    shorturl = makeid(6);
  }
  uid = req.body.uid;
  shortUrlModel.findOne({ shorturl: shorturl }).then((result) => {
    if (result == null) {
      shortUrlModel
        .create({
          shorturl: shorturl,
          longurl: longurl,
          uid: uid,
        })
        .then((result) => {
          res.status(200).send({
            status: "Created Sucessfully",
            result,
          });
          return;
        });
    } else {
      res.status(200).json({
        status: "ShortUrl already exists",
      });
      return;
    }
  });
}

module.exports = shorturl;
