import { TvDto } from './../../models/tv';
import {
  Movie,
  MovieDto,
  SingleMovieVideos,
  MovieImages,
  MovieCredits,
} from './../../models/movie';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { switchMap, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getMovies(type: string, count: number = 12) {
    return this.http
      .get<MovieDto>(
        `${environment.BASE_URL}/movie/${type}?api_key=${environment.KEY}`
      )
      .pipe(
        switchMap((res) => {
          return of(res.results.slice(0, count));
        })
      );
  }

  getMovieDetail(id: string) {
    return this.http.get<Movie>(
      `${environment.BASE_URL}/movie/${id}?api_key=${environment.KEY}`
    );
  }

  getMovieDetailVideo(id: string) {
    return this.http.get<SingleMovieVideos>(
      `${environment.BASE_URL}/movie/${id}/videos?api_key=${environment.KEY}`
    );
  }

  getMovieDetailImages(id: string) {
    return this.http.get<MovieImages>(
      `${environment.BASE_URL}/movie/${id}/images?api_key=${environment.KEY}`
    );
  }

  getMovieDetailCredits(id: string) {
    return this.http.get<MovieCredits>(
      `${environment.BASE_URL}/movie/${id}/credits?api_key=${environment.KEY}`
    );
  }

  searchMovies(page: number) {
    return this.http
      .get<MovieDto>(
        `${environment.BASE_URL}/movie/popular?page=${page}&api_key=${environment.KEY}`
      )
      .pipe(
        switchMap((res) => {
          return of(res.results);
        })
      );
  }

  getTvShows(type: string, count: number = 12) {
    return this.http
      .get<TvDto>(
        `${environment.BASE_URL}/tv/${type}?api_key=${environment.KEY}`
      )
      .pipe(
        switchMap((res) => {
          return of(res.results.slice(0, count));
        })
      );
  }
}
