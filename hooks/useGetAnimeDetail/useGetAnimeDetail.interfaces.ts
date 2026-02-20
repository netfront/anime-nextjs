export interface IDetailTitle {
  english: string | null;
  romaji: string;
  native: string | null;
}

export interface IDetailCoverImage {
  extraLarge: string;
  large: string;
}

export interface IStudio {
  id: number;
  name: string;
}

export interface IAnimeDetail {
  id: number;
  title: IDetailTitle;
  coverImage: IDetailCoverImage;
  bannerImage: string | null;
  description: string | null;
  episodes: number | null;
  duration: number | null;
  status: string;
  season: string | null;
  seasonYear: number | null;
  averageScore: number | null;
  popularity: number | null;
  genres: string[];
  format: string | null;
  studios: {
    nodes: IStudio[];
  };
}

export interface IGetAnimeDetailQueryResponse {
  Media: IAnimeDetail;
}

export interface IGetAnimeDetailQueryVariables {
  id: number;
}
