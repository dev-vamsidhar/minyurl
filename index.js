const express = require("express");
var cors = require("cors");
require("./databse/dbconfig");
require("dotenv").config();

const app = express();
// //Middleware to handle the json data
app.use(express.json());
// app.use(cors(), (req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Methods", "*");
//   res.setHeader("Access-Control-Allow-Headers", "*");
//   next();
// });
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

var router = require("./routes/userroutes");
app.use(router);

app.listen(process.env.PORT, () => {
  console.log(`Server started at ${process.env.PORT}`);
});
