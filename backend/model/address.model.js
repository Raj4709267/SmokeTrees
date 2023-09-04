const mongoose = require("mongoose");

const addressSchema = mongoose.Schema(
  {
    address: { type: String, required: true },
    userId: { type: mongoose.Schema.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

const AddressModel = mongoose.model("address", addressSchema);

module.exports = { AddressModel };
