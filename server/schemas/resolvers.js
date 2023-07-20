const { PlayerProfile } = require("../models");
const { User } = require("../models");
// const { Country } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    playerProfiles: async () => {

      const playerProfiles = await PlayerProfile.find();
      return playerProfiles.map(profile => {
        if (!profile.firstName && !profile.lastName) {
          profile.firstName = "Unknown";
          profile.lastName = "Unknown";
        }
        return profile;
      }); 
    },
    playerProfile: async (root, { profileId }) => {
      const profile = PlayerProfile.findOne({ _id: profileId });
      if(profile && !profile.firstName && !profile.lastName ) {
        profile.firstName = "Unknown";
      }
      return profile;
    },

    // get all users
    users: async () => {
      return await User.find();
    },
    // get a single user
    user: async (root, { userId }) => {
      return await User.findOne({ _id: userId });
    },

    // get all countries
    countries: async () => {
      //return await Country.find();
      const users = await PlayerProfile.find();

      const countries = users.map((user) => user.country);

      const uniqueCountries = [...new Set(countries)];

      const validCountries = uniqueCountries.filter((country) => !!country);

  
      return validCountries.map((country, index) => {
        return {
          _id: index,
          country,
        };
      })
    },
    // get a single country
    // country: async (root, { countryId }) => {
    //   return await PlayerProfile.findOne({ _id: countryId });
    // },


    playerByCountry: async (root, { country }) => {
      try {
        const players = await PlayerProfile.find({ country: country });
        return players;
      } catch (err) {
        console.log(err);
        return [];
      }
    },

    // By adding context to our query, we can retrieve the logged in user without specifically searching for them
    me: async (parent, args, context) => {
      if (context.user) {
        return Profile.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },

  },

  Mutation: {
    addPlayerProfile: async (root, { firstName, lastName, age, position, skills, dominantFoot, team, country, anyOtherComments  }) => {
      return await PlayerProfile.create({ firstName, lastName, age, position, skills, dominantFoot, team, country,  anyOtherComments });
    },

    updatePlayerProfile: async (root, { profileId, firstName, lastName, age, position, skills, dominantFoot, team, country, anyOtherComments  }, context) => {
      if (context.user) {
      return await PlayerProfile.findOneAndUpdate(
        { _id: profileId},
        { 
        firstName: firstName,
        lastName: lastName,
        age: age,
        position: position,
        skills,
        dominantFoot,
        team,
        country,
        anyOtherComments
        },
     
        { new: true }
      );
    }
    throw new AuthenticationError('You need to be logged in!');
  },
    removePlayerProfile: async (root, { profileId }, context) => {
      if (context.user) {
      return await PlayerProfile.findOneAndDelete({ _id: profileId });
    }
    // throw new AuthenticationError('You need to be logged in!');
  },

    // add a user mutation
    addUser: async (root, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
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
