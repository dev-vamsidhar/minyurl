const shortUrlModel = require("../models/shorturlmodel");
const shorturl = require("./shorturl");

redirect = (req, res) => {
  const shorturl = req.params.shorturl;
  shortUrlModel.findOne({ shorturl: shorturl }).then((result) => {
    if (result == null) {
      res.send("Invalid link");
    } else {
      console.log(result);
      shortUrlModel
        .updateOne(
          { shorturl: shorturl },
          {
            $inc: { visits: 1 },
            $push: { dates: Date.now() },
          }
        )
        .then((updateresult) => {
          res.send(result.longurl);
        });
    }
  });
};

module.exports = redirect;
