const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type PlayerProfile {
    _id: ID
    name: String!
    position: String
    skills: String
    measurements: Measurements
    Team: String
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
    addPlayerProfile(name: String!, position: String!, skills: String, anyOtherComments: String): PlayerProfile
    updatePlayerProfile(id: ID!, name: String): PlayerProfile
    removePlayerProfile(profileId: ID!): PlayerProfile
  }
`;

module.exports = typeDefs;


// input ProfileInput {
//   name: String!
//   positions: [String!]!
//   skills: String
//   measurements: MeasurementsInput
//   Team: String!
//   School: String
//   anyOtherComments: [String]
// }

// input MeasurementsInput {
//   height: Int
//   weight: Int
//   dominantFoot: String
// }