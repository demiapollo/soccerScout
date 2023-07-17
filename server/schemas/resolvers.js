const { PlayerProfile } = require("../models");

const resolvers = {
  Query: {
    playerProfiles: async () => {
      return await PlayerProfile.find();
    },
    playerProfile: async (root, { profileId }) => {
      return await PlayerProfile.findOne({ _id: profileId });
    },
  },

  Mutation: {
    addPlayerProfile: async (root, { name, position, skills, anyOtherComments  }) => {
      return await PlayerProfile.create({ name, position, skills, anyOtherComments });
    },

    updatePlayerProfile: async (root, { name }) => {
      return await PlayerProfile.findOneAndUpdate(
        { _id: profileId },
        // { ProfileInput },
        { new: true }
      );
    },
    removePlayerProfile: async (root, { profileId }) => {
      return await PlayerProfile.findOneAndDelete({ _id: profileId });
    },
  },
};

module.exports = resolvers;
