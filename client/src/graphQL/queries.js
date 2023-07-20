import { gql } from "@apollo/client";

export const QUERY_PLAYERS = gql`
  query getPlayerProfiles {
    playerProfiles {
      _id
      firstName
      lastName
      position
      skills
      dominantFoot
      team
      country
      anyOtherComments
    }
  }
`;

export const QUERY_PLAYER = gql`
  query getSinglePlayer($profileId: ID!) {
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
  }
`;

// export const GET_COUNTRIES = gql`
//   query Countries {
//     countries {
//       _id
//       country
//     }
//   }
// `;

// export const GET_PLAYER_BY_COUNTRY = gql`
//   query Query($country: String!) {
//     playerByCountry(country: $country) {
//       _id
//       name
//       position
//       skills
//       dominantFoot
//       team
//       country
//       anyOtherComments
//     }
//   }
// `;
