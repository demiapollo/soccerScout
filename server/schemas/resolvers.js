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
    addPlayerProfile: async (root, { name, position, skills, dominantFoot, team, school, anyOtherComments  }) => {
      return await PlayerProfile.create({ name, position, skills, dominantFoot, team, school,  anyOtherComments });
    },

    updatePlayerProfile: async (root, { profileId, name, position, skills, dominantFoot, team, school, anyOtherComments  }) => {
      return await PlayerProfile.findOneAndUpdate(
        { _id: profileId },
        { name },
        { position },
        { skills },
        { dominantFoot },
        { team },
        { school },
        { anyOtherComments },
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
