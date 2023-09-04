const mongooes = require("mongoose");

const userSchema = mongooes.Schema(
  {
    user_name: { type: String, require: true },
  },
  { timestamps: true }
);

const UserModel = mongooes.model("User", userSchema);

module.exports = { UserModel };
