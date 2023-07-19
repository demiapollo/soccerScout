import { gql } from '@apollo/client';

export const GET_PLAYER_PROFILES = gql`
    query GetPlayerProfiles {
     playerProfiles {
         _id
        name
        position
        skills
        dominantFoot
        team
        country
        anyOtherComments
    }
  }
`;

export const GET_PLAYER_PROFILE = gql`
    playerProfile(profileId: $profileId) {
        _id
        name
        position
        skills
        dominantFoot
        team
        country
        anyOtherComments
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
    query Query($country: String!) {
    playerByCountry(country: $country) {
        _id
        name
        position
        skills
        dominantFoot
        team
        country
        anyOtherComments
    }
  }
`;