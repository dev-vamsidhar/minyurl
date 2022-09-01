const express = require("express");
var cors = require("cors");
require("./databse/dbconfig");
require("dotenv").config();

const app = express();
// //Middleware to handle the json data
app.use(express.json());
app.use(cors());

var router = require("./routes/userroutes");
app.use(router);

app.listen(process.env.PORT, () => {
  console.log(`Server started at ${process.env.PORT}`);
});
