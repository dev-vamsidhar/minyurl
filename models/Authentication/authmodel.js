var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var AuthSchema = new Schema({
  uid: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  username: {
    required: false,
    type: String,
  },
});

//First argument will be collection name and second argument will the schema name
var AuthModel = mongoose.model("users", AuthSchema);
module.exports = AuthModel;
