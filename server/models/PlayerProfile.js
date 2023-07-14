const { Schema, model } = require('mongoose');

const profileSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  positions: [
    {
      type: String,
      enum: ['goalie', 'defense', 'midfield', 'forward' ],
    }
  ],
  skills: 
    {
      type: String,
      trim: true,
    },
  measurements: {
    height: {type: Number, min: 100, max: 215},
    weight: {type: Number, min: 30, max: 150},
    dominantFoot: {type: String, enum: ['left', 'right', 'both']},
  },
  Team: {
    type: String,
    required: true,
  },
  School: {
    type: String,
  },
  anyOtherComments: [
    {
      type: String,
      trim: true,
    },
  ],
});

const PlayerProfile = model('PlayerProfile', profileSchema);

module.exports = PlayerProfile;
