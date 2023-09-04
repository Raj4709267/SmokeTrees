const addUserDetails = async (req, res) => {
  const { user_name, address } = req?.body;

  console.log(user_name, address);

  res.send({ message: "added" });
};

module.exports = { addUserDetails };
