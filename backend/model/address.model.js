const mongoose = require("mongoose");

const addressSchema = mongoose.Schema({
  address: { type: String, required: true },
  userId: { type: mongoose.Schema.ObjectId, ref: "User" },
});

const addressModel = mongoose.model("Address", addressSchema);

module.exports = { addressModel };
