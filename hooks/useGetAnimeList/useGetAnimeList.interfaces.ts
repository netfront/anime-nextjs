export interface ITitle {
  english: string | null;
  romaji: string;
}

export interface ICoverImage {
  large: string;
  medium: string;
}

export interface IAnimeMedia {
  id: number;
  title: ITitle;
  coverImage: ICoverImage;
  genres: string[];
  averageScore: number | null;
  episodes: number | null;
  status: string;
}

export interface IPageInfo {
  total: number;
  currentPage: number;
  lastPage: number;
  hasNextPage: boolean;
}

export interface IGetAnimeListQueryResponse {
  Page: {
    pageInfo: IPageInfo;
    media: IAnimeMedia[];
  };
}

export interface IGetAnimeListQueryVariables {
  page?: number;
  perPage?: number;
}
