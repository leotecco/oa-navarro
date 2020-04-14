const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: String,
  password: Number,
});

module.exports = mongoose.model("User", userSchema);
