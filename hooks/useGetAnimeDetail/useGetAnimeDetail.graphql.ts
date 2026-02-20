import { gql } from '@apollo/client';

export const GET_ANIME_DETAIL = gql`
  query GetAnimeDetail($id: Int!) {
    Media(id: $id, type: ANIME) {
      id
      title {
        english
        romaji
        native
      }
      coverImage {
        extraLarge
        large
      }
      bannerImage
      description(asHtml: false)
      episodes
      duration
      status
      season
      seasonYear
      averageScore
      popularity
      genres
      format
      studios(isMain: true) {
        nodes {
          id
          name
        }
      }
    }
  }
`;
