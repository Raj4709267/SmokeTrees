const mongooes = require("mongoose");

const userSchema = mongooes.Schema({
  user_name: { type: String, require: true },
});

const userModel = mongooes.model("User", userSchema);

module.exports = { userModel };
