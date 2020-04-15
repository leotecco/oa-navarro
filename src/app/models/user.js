const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: String,
  password: String,
});

userSchema.methods.comparePassword = function (password) {
  return this.password === password;
};

module.exports = mongoose.model("User", userSchema);
