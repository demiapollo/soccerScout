const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type PlayerProfile {
    _id: ID
    name: String!
    positions: [String]!
    skills: String
    measurements: Measurements
    Team: String!
    School: String
    anyOtherComments: String
  }

  type Measurements {
    height: Int
    weight: Int
    dominantFoot: String
  }

  type Query {
    playerProfiles: [PlayerProfile]!
    playerProfile(profileId: ID!): PlayerProfile
  }

  type Mutation {
    addPlayerProfile(name: String!, positions: [String]!, skills: String, measurements: Measurements, Team: String!, School: String, anyOtherComments: String): PlayerProfile!
    updatePlayerProfile(profileId: ID!, name: String!, positions: [String]!, skills: String, measurements: Measurements, Team: String!, School: String, anyOtherComments: String): PlayerProfile!
    removePlayerProfile(profileId: ID!): PlayerProfile
  }
`;

module.exports = typeDefs;
