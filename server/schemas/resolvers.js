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
