const express = require("express");
const { addUserDetails } = require("../controllers/userdetails.controller");

const userDetailsRoutes = express.Router();

userDetailsRoutes.get("/", addUserDetails);

module.exports = { userDetailsRoutes };
