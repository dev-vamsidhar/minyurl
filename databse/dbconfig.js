const mongoose = require("mongoose");
require("dotenv").config();

const dbUri = process.env.DATABASE_URI;
mongoose.connect(dbUri);

const database = mongoose.connection;
database.once("connected", () => {
  console.log("database connected sucessfully");
});

database.on("error", (error) => {
  console.log(error);
});

module.exports = database;
