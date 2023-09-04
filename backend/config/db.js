const mongooes = require("mongoose");
require("dotenv").config();

const connection = mongooes.connect(process.env.MONGO_URL);

module.exports = { connection };
