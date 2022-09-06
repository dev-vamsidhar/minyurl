var express = require("express");
const login = require("../controllers/Authentication/Api/login");
const signup = require("../controllers/Authentication/Api/signup");
const tokencheck = require("../controllers/Authentication/tokencheck");
const shorturl = require("../controllers/shorturl");
const redirect = require("../controllers/redirect");
const getAllUrls = require("../controllers/geturls.js");
const editLongurl = require("../controllers/editlongurl.js");
var router = express.Router();

router.get("/app/signup", signup);
router.get("/app/login", login);
router.get("/:shorturl", redirect);
router.get("/", (req, res) => {
  res.send("website under construction v1.1");
});
router.use(tokencheck);
router.post("/app/shorturl", shorturl);
router.get("/app/getallurls", getAllUrls);
router.post("/app/editlongurl", editLongurl);
module.exports = router;
