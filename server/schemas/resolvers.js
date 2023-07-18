const { PlayerProfile } = require("../models");
const { User } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    playerProfiles: async () => {
      return await PlayerProfile.find();
    },
    playerProfile: async (root, { profileId }) => {
      return await PlayerProfile.findOne({ _id: profileId });
    },

    // get all users
    users: async () => {
      return await User.find();
    },
    // get a single user
    user: async (root, { userId }) => {
      return await User.findOne({ _id: userId });
    },
  },

  Mutation: {
    addPlayerProfile: async (root, { name, position, skills, dominantFoot, team, country, anyOtherComments  }) => {
      return await PlayerProfile.create({ name, position, skills, dominantFoot, team, country,  anyOtherComments });
    },

    updatePlayerProfile: async (root, { profileId, name, position, skills, dominantFoot, team, country, anyOtherComments  }) => {
      return await PlayerProfile.findOneAndUpdate(
        { _id: profileId},
        { 
        name: name,
        position: position,
        skills,
        dominantFoot,
        team,
        country,
        anyOtherComments
        },
     
        { new: true }
      );
    },
    removePlayerProfile: async (root, { profileId }) => {
      return await PlayerProfile.findOneAndDelete({ _id: profileId });
    },

    // add a user mutation
    addUser: async (root, { name, email, password }) => {
      const User = await User.create({ name, email, password });
      const token = signToken(User);
      return { token, user };
    },
    // login mutation
    login: async (root, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password");
      }

      const token = signToken(user);
      return { token, user };
    },
  },
};

module.exports = resolvers;
