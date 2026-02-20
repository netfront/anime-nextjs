import { useQuery } from '@apollo/client';

import { GET_ANIME_LIST } from './useGetAnimeList.graphql';
import { IGetAnimeListQueryResponse, IGetAnimeListQueryVariables } from './useGetAnimeList.interfaces';

export const useGetAnimeList = (variables?: IGetAnimeListQueryVariables) => {
  const { data, loading, error } = useQuery<IGetAnimeListQueryResponse, IGetAnimeListQueryVariables>(
    GET_ANIME_LIST,
    { variables: { page: 1, perPage: 20, ...variables } },
  );

  return { data, isLoading: loading, error };
};
