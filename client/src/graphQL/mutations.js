import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($username: String!, $email: String!) {
    updateUser(username: $username, email: $email) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const ADD_PLAYER = gql`
  mutation addPlayerProfile(
    $firstName: String!
    $lastName: String!
    $age: Int!
    $position: String
    $skills: String
    $dominantFoot: String
    $team: String
    $country: String
    $anyOtherComments: String
  ) {
    addPlayerProfile(
      firstName: $firstName
      lastName: $lastName
      age: $age
      position: $position
      skills: $skills
      dominantFoot: $dominantFoot
      team: $team
      country: $country
      anyOtherComments: $anyOtherComments
    ) {
      _id
      firstName
      lastName
    }
  }
`;

export const FOLLOW_PLAYER = gql`
  mutation followPlayer($profileId: ID!) {
    followPlayer(profileId: $profileId) {
      _id
      firstName
      lastName
    }
  }
`;

export const UNFOLLOW_PLAYER = gql`
  mutation unfollowPlayer($profileId: ID!) {
    unfollowPlayer(profileId: $profileId) {
      _id
      firstName
      lastName
    }
  }
`;

export const UPDATE_PLAYER = gql`
  mutation updatePlayerProfile(
    $profileId: ID!
    $firstName: String!
    $lastName: String!
    $age: Int!
    $position: String
    $skills: String
    $dominantFoot: String
    $team: String
    $country: String
    $anyOtherComments: String
  ) {
    updatePlayerProfile(
      profileId: $profileId
      firstName: $firstName
      lastName: $lastName
      age: $age
      position: $position
      skills: $skills
      dominantFoot: $dominantFoot
      team: $team
      country: $country
      anyOtherComments: $anyOtherComments
    ) {
      _id
      firstName
      lastName
    }
  }
`;

export const DELETE_PLAYER = gql`
  mutation removePlayerProfile($profileId: ID!) {
    removePlayerProfile(profileId: $profileId) {
      _id
      firstName
      lastName
    }
  }
`;
