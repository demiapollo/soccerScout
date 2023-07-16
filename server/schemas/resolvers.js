const { PlayerProfile } = require('../models');

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
    addPlayerProfile: async (parent, { name, positions, skills, measurements, Team, School, anyOtherComments }) => {
      return await PlayerProfile.create({ name, positions, skills, measurements, Team, School, anyOtherComments });
    },
    
    updatePlayerProfile: async (parent, { profileId, name, positions, skills, measurements, Team, School, anyOtherComments }) => {
      return await PlayerProfile.findOneAndUpdate(
        { _id: profileId },
        { name, positions, skills, measurements, Team, School, anyOtherComments },
        { new: true }
      );
    },
    removePlayerProfile: async (parent, { profileId }) => {
      return await PlayerProfile.findOneAndDelete({ _id: profileId });
    },
  },
};

module.exports = resolvers;
