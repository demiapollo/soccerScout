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

  type Country {
    _id: ID
    country: String
    playerIDs: [PlayerProfile]
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
    countries: [Country]!
    country(countryId: ID!): Country
    users: [User]!
    user(userId: ID!): User
    me: User
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
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;


// profile is user/scout profile