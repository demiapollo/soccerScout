const { PlayerProfile } = require("../models");

const resolvers = {
  Query: {
    playerProfiles: async () => {
      return await PlayerProfile.find();
    },
    playerProfile: async (parent, { profileId }) => {
      return await PlayerProfile.findOne({ _id: profileId });
    },
  },

  Mutation: {
    addPlayerProfile: async (parent, { ProfileInput }) => {
      return await PlayerProfile.create({ ProfileInput });
    },

    updatePlayerProfile: async (parent, { ProfileInput }) => {
      return await PlayerProfile.findOneAndUpdate(
        { _id: profileId },
        { ProfileInput },
        { new: true }
      );
    },
    removePlayerProfile: async (parent, { profileId }) => {
      return await PlayerProfile.findOneAndDelete({ _id: profileId });
    },
  },
};

module.exports = resolvers;
