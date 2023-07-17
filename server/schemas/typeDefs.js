const { gql } = require("apollo-server-express");

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

  type Auth {
    token: ID!
    user: User
  }

  input MeasurementsInput {
    height: Int
    weight: Int
    dominantFoot: String
  }

  input ProfileInput {
    name: String!
    positions: [String!]!
    skills: String
    measurements: MeasurementsInput
    Team: String!
    School: String
    anyOtherComments: [String]
  }

  type Query {
    playerProfiles: [PlayerProfile]!
    playerProfile(profileId: ID!): PlayerProfile
  }

  type Mutation {
    addPlayerProfile(input: ProfileInput!): PlayerProfile!
    updatePlayerProfile(id: ID!, input: ProfileInput!): PlayerProfile!
    removePlayerProfile(profileId: ID!): PlayerProfile
  }
`;

module.exports = typeDefs;
