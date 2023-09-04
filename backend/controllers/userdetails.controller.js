const { AddressModel } = require("../model/address.model");
const { UserModel } = require("../model/user.model");

const addUserDetails = async (req, res) => {
  const { user_name, address } = req.body;

  console.log(user_name, address);
  if (!user_name || !address) {
    return res.status(400).json({ message: "Fields should not be empty" });
  }
  try {
    const user = await UserModel.create({ user_name });
    const data = await AddressModel.create({ userId: user._id, address });
    console.log(data);
    res.send(data);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const getUserDetails = async (req, res) => {
  try {
    const data = await AddressModel.find()
      .populate("userId")
      .sort({ createdAt: -1 });
    console.log(data);
    res.send(data);
  } catch (err) {
    console.log(err);
    res.send("err");
  }
};

module.exports = { addUserDetails, getUserDetails };
