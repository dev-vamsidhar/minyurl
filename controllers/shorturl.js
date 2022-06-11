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
          res.send({
            result,
          });
        });
    } else {
      res.send("Short name already exists. Try other sequence");
    }
  });
}

module.exports = shorturl;
