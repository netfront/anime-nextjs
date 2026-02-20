import { useQuery } from '@apollo/client';

import { GET_ANIME_DETAIL } from './useGetAnimeDetail.graphql';
import { IGetAnimeDetailQueryResponse, IGetAnimeDetailQueryVariables } from './useGetAnimeDetail.interfaces';

export const useGetAnimeDetail = (id: number) => {
  const { data, loading, error } = useQuery<IGetAnimeDetailQueryResponse, IGetAnimeDetailQueryVariables>(
    GET_ANIME_DETAIL,
    { variables: { id } },
  );

  return { data, isLoading: loading, error };
};
