const { Schema, model } = require("mongoose");

const profileSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  position: {
    type: String,
    // enum: ['goalie', 'defense', 'midfield', 'forward' ],
  },
  skills: {
    type: String,
    trim: true,
  },
  dominantFoot: {
    type: String,
  },
  Team: {
    type: String,
    // required: true,
  },
  School: {
    type: String,
  },
  anyOtherComments: {
    type: String,
    // trim: true,
  },
});

const PlayerProfile = model("PlayerProfile", profileSchema);

module.exports = PlayerProfile;
