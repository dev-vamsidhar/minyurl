var express = require("express");
const login = require("../controllers/Authentication/Api/login");
const signup = require("../controllers/Authentication/Api/signup");
const tokencheck = require("../controllers/Authentication/tokencheck");
const shorturl = require("../controllers/shorturl");
const redirect = require("../controllers/redirect");
var router = express.Router();

router.get("/app/signup", signup);
router.get("/app/login", login);
router.get("/:shorturl", redirect);
router.get("/", (req, res) => {
  res.send("website under construction");
});
router.use(tokencheck);
router.post("/app/shorturl", shorturl);
module.exports = router;
