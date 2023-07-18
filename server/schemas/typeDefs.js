const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type PlayerProfile {
    _id: ID
    name: String!
    position: String
    skills: String
    dominantFoot: String
    team: String
    country: String
    anyOtherComments: String
  }

  type User {
    _id: ID
    name: String
    email: String
    password: String
  }

  type Auth {
    token: ID!
    user: User
  }
  
  type Query {
    playerProfiles: [PlayerProfile]!
    playerProfile(profileId: ID!): PlayerProfile
  }

  type Mutation {
    addPlayerProfile(
      name: String!, 
      position: String!, 
      skills: String, 
      dominantFoot: String,
      team: String,
      country: String,
      anyOtherComments: String,
      ): PlayerProfile
    updatePlayerProfile(profileId: ID!, 
      name: String, 
      position: String, 
      skills: String, 
      dominantFoot: String,
      team: String,
      country: String,
      anyOtherComments: String,
      ): PlayerProfile
    removePlayerProfile(profileId: ID!): PlayerProfile
  }
`;

module.exports = typeDefs;


// profile is user/scout profile