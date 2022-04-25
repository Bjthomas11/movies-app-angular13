import { Movie } from './movie';

// export interface Tv extends Movie {}

// export interface TvDto {
//   page: number;
//   results: Tv[];
//   total_results: number;
//   total_pages: number;
// }

export interface Tv {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  page: number;
  results: Tv[];
  total_results: number;
  total_pages: number;
  original_language: string;
  revenue: number;
  status: string;
  runtime: number;
  tagline: string;
  genres: Genre[];
}
export interface TvDto {
  page: number;
  results: Tv[];
  total_results: number;
  total_pages: number;
}

export interface Genre {
  id: number;
  name: string;
}

export interface SingleTvideos {
  id: number;
  results: TvVideo;
}

export interface TvVideo {
  key: string;
  site: string;
  name: string;
}

export interface TvImages {
  backdrops: {
    file_path: string;
  }[];
}

export interface TvCredits {
  cast: {
    name: string;
    profile_path: string;
  }[];
}
