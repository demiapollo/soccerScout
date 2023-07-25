const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/soccerPlayers")
  .then(() => {
    console.log("Successfully connected to MongoDB");
  });

module.exports = mongoose.connection;
