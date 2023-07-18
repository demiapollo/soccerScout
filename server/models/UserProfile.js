const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must match an email address!"],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
});

const User = model("User", UserSchema);

module.exports = User;

// Our users are soccer scouts.
// They will be able to create a profile for each player they scout.
// User need to provide name, email, password to sign up.
