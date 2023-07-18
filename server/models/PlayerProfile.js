const { Schema, model } = require("mongoose");
// const Country = require("./Country");

const profileSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
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
    type: Schema.Types.ObjectId,
    required: "Country",
  },
  anyOtherComments: {
    type: String,
  },
},
// testing to see if this helps
// {
//     toJSON: {
//       virtuals: true,
//     },
//     id: false,
//   }
);

const PlayerProfile = model("PlayerProfile", profileSchema);

module.exports = PlayerProfile;
