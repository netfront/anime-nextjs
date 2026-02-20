import { gql } from '@apollo/client';

export const GET_ANIME_LIST = gql`
  query GetAnimeList($page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
      }
      media(type: ANIME, sort: TRENDING_DESC) {
        id
        title {
          english
          romaji
        }
        coverImage {
          large
          medium
        }
        genres
        averageScore
        episodes
        status
      }
    }
  }
`;
