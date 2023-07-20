const { Schema, model } = require("mongoose");

const profileSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  age:{
    type: Number,
    required: true,
  },
  position: {
    type: String,
  },
  skills: {
    type: String,
    trim: true,
  },
  dominantFoot: {
    type: String,
  },
  team: {
    type: String,
  },
  country: {
    type: String,
    required: true,
    enum: ["Argentina", "Brazil", "England", "France", "Germany", "Italy", "Spain", "United States"],
  },
  anyOtherComments: {
    type: String,
  },
},
);

const PlayerProfile = model("PlayerProfile", profileSchema);

module.exports = PlayerProfile;
