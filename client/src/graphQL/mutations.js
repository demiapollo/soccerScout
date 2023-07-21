import { gql } from '@apollo/client';

export const AddPlayerProfile = gql`
    mutation AddPlayerProfile($firstName: String!, $lastName: String!, $age: Int!, $position: String, $skills: String, $dominantFoot: String, $team: String, $country: String, $anyOtherComments: String) {
     addPlayerProfile(firstName: $firstName, lastName: $lastName, age: $age, position: $position, skills: $skills, dominantFoot: $dominantFoot, team: $team, country: $country, anyOtherComments: $anyOtherComments) {
      _id
      age
      anyOtherComments
      country
      dominantFoot
      firstName
      lastName
      position
      skills
      team
    }
  }
`;

export const RemovePlayerProfile = gql`
  mutation RemovePlayerProfile($profileId: ID!) {
    removePlayerProfile(profileId: $profileId) {
        _id
        }
    }
`;

export const UpdatePlayerProfile = gql`
    mutation UpdatePlayerProfile($profileId: ID!, $firstName: String!, $lastName: String!, $age: Int!, $position: String, $skills: String, $dominantFoot: String, $team: String, $country: String, $anyOtherComments: String) {
        updatePlayerProfile(profileId: $profileId, firstName: $firstName, lastName: $lastName, age: $age, position: $position, skills: $skills, dominantFoot: $dominantFoot, team: $team, country: $country, anyOtherComments: $anyOtherComments) {
            _id
            age
            anyOtherComments
            country
            dominantFoot
            firstName
            lastName
            position
            skills
            team
    }
  }
`;

export const AddUser = gql`
mutation AddUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        email
        password
        username
      }
    }
  }
`;

export const Login = gql`
mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
        password
        username
      }
    }
  }
`;
