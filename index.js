const express = require("express");
var cors = require("cors");
require("./databse/dbconfig");
require("dotenv").config();

const app = express();
// //Middleware to handle the json data
app.use(express.json());
app.use(cors(), (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  );
  res.setHeader("Access-Control-Allow-Headers");
  next();
});

var router = require("./routes/userroutes");
app.use(router);

app.listen(process.env.PORT, () => {
  console.log(`Server started at ${process.env.PORT}`);
});
