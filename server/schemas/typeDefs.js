const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type PlayerProfile {
    _id: ID
    firstName: String!
    lastName: String!
    age: Int!
    position: String
    skills: String
    dominantFoot: String
    team: String
    country: String
    anyOtherComments: String
  }

  type User {
    _id: ID
    username: String
    email: String
    password: String
    createdPlayers: [PlayerProfile]
    favoritePlayers: [PlayerProfile]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    playerProfiles: [PlayerProfile]
    playerProfile(profileId: ID!): PlayerProfile
    playerByCountry(country: String!): [PlayerProfile]
    users: [User]!
    user(userId: ID!): User
    me: User
  }

  type Mutation {
    addPlayerProfile(
      firstName: String!
      lastName: String!
      age: Int!
      position: String
      skills: String
      dominantFoot: String
      team: String
      country: String
      anyOtherComments: String
    ): PlayerProfile
    updatePlayerProfile(
      profileId: ID!
      firstName: String!
      lastName: String!
      age: Int!
      position: String
      skills: String
      dominantFoot: String
      team: String
      country: String
      anyOtherComments: String
    ): PlayerProfile
    removePlayerProfile(profileId: ID!): PlayerProfile
    followPlayer(profileId: ID!): PlayerProfile
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    updateUser(username: String!, email: String!): Auth
  }
`;

module.exports = typeDefs;

// profile is user/scout profile
