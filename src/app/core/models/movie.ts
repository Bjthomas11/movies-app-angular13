export interface Movie {
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
  results: Movie[];
  total_results: number;
  total_pages: number;
  original_language: string;
  revenue: number;
  status: string;
  runtime: number;
  tagline: string;
  genres: Genre[];
}
export interface MovieDto {
  page: number;
  results: Movie[];
  total_results: number;
  total_pages: number;
}

export interface Genre {
  id: number;
  name: string;
}

export interface SingleMovieVideos {
  id: number;
  results: MovieVideo;
}

export interface MovieVideo {
  key: string;
  site: string;
  name: string;
}

export interface MovieImages {
  backdrops: {
    file_path: string;
  }[];
}
