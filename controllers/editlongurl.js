const shortUrlModel = require("../models/shorturlmodel");

function editLongUrl(req, res) {
  const token = req.header("token");
  const shorturl = req.body.shorturl;
  const newlongurl = req.body.longurl;
  console.log(shorturl);
  console.log(newlongurl);
  shortUrlModel
    .updateOne({ shorturl: shorturl }, { longurl: newlongurl })
    .then((err, val) => {
      res.json({
        res: "Updated Sucessfully",
      });
    });
}

module.exports = editLongUrl;
