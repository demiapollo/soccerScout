const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new Schema({
  username: {
    type: String,
    required: [true, "Username is required!"],
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Email is required!"],
    unique: true,
    match: [/.+@.+\..+/, "Must match an email address!"],
  },
  password: {
    type: String,
    required: [true, "Password is required!"],
    minlength: [5, "Password must be at least 5 characters long!"],
  },
  createdPlayers: [
    {
      type: Schema.Types.ObjectId,
      ref: "PlayerProfile",
    },
  ],
  favoritePlayers: [
    {
      type: Schema.Types.ObjectId,
      ref: "PlayerProfile",
    },
  ],
});

// set up pre-save middleware to create password
UserSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

UserSchema.post("save", function (error, doc, next) {
  if (error.code === 11000) {
    next(new Error("email must be unique"));
  } else {
    next(error);
  }
});

// compare the incoming password with the hashed password
UserSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model("User", UserSchema);

module.exports = User;

// Our users are soccer scouts.
// They will be able to create a profile for each player they scout.
// User need to provide name, email, password to sign up.
