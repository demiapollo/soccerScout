const { PlayerProfile } = require("../models");
const { User } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    playerProfiles: async () => {
      return PlayerProfile.find();
      // return playerProfiles.map(profile => {
      //   if (!profile.firstName && !profile.lastName) {
      //     profile.firstName = "Unknown";
      //     profile.lastName = "Unknown";
      //   }
      //   return profile;
      // });
    },
    playerProfile: async (_root, { profileId }) => {
      const profile = PlayerProfile.findById(profileId);
      if (profile && !profile.firstName && !profile.lastName) {
        profile.firstName = "Unknown";
        profile.lastName = "Unknown";
      }
      return profile;
    },

    // get all users
    users: async () => {
      return await User.find();
    },
    // get a single user
    user: async (_root, { userId }) => {
      return await User.findById(userId);
    },

    // // get all countries
    // countries: async () => {
    //   //return await Country.find();
    //   const users = await PlayerProfile.find();

    //   const countries = users.map((user) => user.country);

    //   const uniqueCountries = [...new Set(countries)];

    //   const validCountries = uniqueCountries.filter((country) => !!country);

    //   return validCountries.map((country, index) => {
    //     return {
    //       _id: index,
    //       country,
    //     };
    //   });
    // },
    // get a single country
    // country: async (root, { countryId }) => {
    //   return await PlayerProfile.findOne({ _id: countryId });
    // },

    playerByCountry: async (_root, { country }) => {
      try {
        const players = await PlayerProfile.find({ country: country });
        return players;
      } catch (err) {
        console.log(err);
        return [];
      }
    },

    // By adding context to our query, we can retrieve the logged in user without specifically searching for them
    me: async (_parent, _args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id)
          .populate({
            path: "createdPlayers",
            select: "-__v",
          })
          .populate({
            path: "favoritePlayers",
            select: "firstName lastName",
          });
        return user;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },

  Mutation: {
    addPlayerProfile: async (
      _root,
      {
        firstName,
        lastName,
        age,
        position,
        skills,
        dominantFoot,
        team,
        country,
        anyOtherComments,
      }
    ) =>
      // context
      {
        // if (context.user) {
        const player = await PlayerProfile.create({
          firstName,
          lastName,
          age,
          position,
          skills,
          dominantFoot,
          team,
          country,
          anyOtherComments,
        });

        // await User.findByIdAndUpdate(
        //   { _id: context.user._id },
        //   { $addToSet: { createdPlayers: player._id } }
        // );
        return player;
        // }
        // throw new AuthenticationError("You need to be logged in!");
      },

    updatePlayerProfile: async (
      _root,
      {
        profileId,
        firstName,
        lastName,
        age,
        position,
        skills,
        dominantFoot,
        team,
        country,
        anyOtherComments,
      },
      context
    ) => {
      if (context.user) {
        return await PlayerProfile.findByIdAndUpdate(
          { _id: profileId },
          {
            firstName,
            lastName,
            age,
            position,
            skills,
            dominantFoot,
            team,
            country,
            anyOtherComments,
          },
          { new: true }
        );
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    removePlayerProfile: async (_root, { profileId }, context) => {
      if (context.user) {
        const player = await PlayerProfile.findByIdAndDelete({
          _id: profileId,
        });
        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $pull: { createdPlayers: player._id } }
        );
        return player;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    followPlayer: async (_root, { profileId }, context) => {
      if (context.user) {
        const player = await PlayerProfile.findById(profileId);
        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $addToSet: { favoritePlayers: player._id } }
        );
        return player;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    unfollowPlayer: async (_root, { profileId }, context) => {
      if (context.user) {
        const player = await PlayerProfile.findById(profileId);
        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $pull: { favoritePlayers: player._id } }
        );
        return player;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    // add a user mutation
    addUser: async (_root, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    // login mutation
    login: async (_root, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },
    updateUser: async (_root, { username, email }, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(
          { _id: context.user._id },
          { username, email },
          { new: true }
        );
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
