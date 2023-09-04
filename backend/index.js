const express = require("express");
const cors = require("cors");
const { connection } = require("./config/db");
const { userModel } = require("./model/user.model");
const { userDetailsRoutes } = require("./routes/userdetails.route");
require("dotenv").config();
const PORT = process.env.PORT || 8000;

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  const data = await userModel.find();
  console.log(data);
  res.send({ message: data });
});

app.use("/api/userdetails", userDetailsRoutes);

app.listen(PORT, async () => {
  console.log("server running on 8000");
  try {
    await connection;
    console.log("connected to db");
  } catch (err) {
    console.log("error while connecting to db");
    console.log(err);
  }
});
