const express = require("express");
const mongoose = require("mongoose");
require("./databse/dbconfig");
require("dotenv").config();

const app = express();
//Middleware to handle the json data
app.use(express.json());

var router = require("./routes/userroutes")
app.use(router)


app.listen(process.env.PORT, () => {
  console.log(`Server started at ${process.env.PORT}`);
});
