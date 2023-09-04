const mongooes = require("mongoose");

const connection = mongooes.connect(
  "mongodb+srv://rk2519962:rajkumarmahto@cluster0.1cdykr6.mongodb.net/?retryWrites=true&w=majority"
);

module.exports = { connection };
