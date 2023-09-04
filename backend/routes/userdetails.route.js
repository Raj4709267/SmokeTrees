const express = require("express");
const {
  addUserDetails,
  getUserDetails,
} = require("../controllers/userdetails.controller");

const userDetailsRoutes = express.Router();

userDetailsRoutes.post("/", addUserDetails);
userDetailsRoutes.get("/", getUserDetails);

module.exports = { userDetailsRoutes };
