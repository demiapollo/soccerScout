import { gql } from '@apollo/client';

export const GET_PLAYER_PROFILES = gql`
query GetPlayerProfiles {
  playerProfiles {
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

export const GET_PLAYER_PROFILE = gql`
query PlayerProfile($profileId: ID!) {
  playerProfile(profileId: $profileId) {
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

export const GET_COUNTRIES = gql`
    query Countries {
      countries {
         _id
         country
        }
    }
`;

export const GET_PLAYER_BY_COUNTRY = gql`
query PlayerByCountry($country: String!) {
  playerByCountry(country: $country) {
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