import {
  TvShowDto,
  TvShow,
  TvShowVideoDto,
  TvShowCredits,
  TvShowImages,
} from './../../models/tv';
import {
  Movie,
  MovieDto,
  MovieImages,
  MovieCredits,
} from './../../models/movie';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { switchMap, of } from 'rxjs';
import { GenresDto } from '../../models/genre';

@Injectable({
  providedIn: 'root',
})
export class TvShowsService {
  constructor(private http: HttpClient) {}

  getTvShows(type: string = 'upcoming', count: number = 12) {
    return this.http
      .get<TvShowDto>(
        `${environment.BASE_URL}/tv/${type}?api_key=${environment.KEY}`
      )
      .pipe(
        switchMap((res) => {
          return of(res.results.slice(0, count));
        })
      );
  }

  getTvShowDetail(id: string) {
    return this.http.get<TvShow>(
      `${environment.BASE_URL}/tv/${id}?api_key=${environment.KEY}`
    );
  }

  getTvShowDetailVideo(id: string) {
    return this.http
      .get<TvShowVideoDto>(
        `${environment.BASE_URL}/tv/${id}/videos?api_key=${environment.KEY}`
      )
      .pipe(
        switchMap((res) => {
          return of(res.results);
        })
      );
  }

  getTvShowDetailImages(id: string) {
    return this.http.get<TvShowImages>(
      `${environment.BASE_URL}/tv/${id}/images?api_key=${environment.KEY}`
    );
  }

  getTvShowDetailCredits(id: string) {
    return this.http.get<TvShowCredits>(
      `${environment.BASE_URL}/tv/${id}/credits?api_key=${environment.KEY}`
    );
  }

  getSimilarTvShows(id: string) {
    return this.http
      .get<TvShowDto>(
        `${environment.BASE_URL}/tv/${id}/similar?api_key=${environment.KEY}`
      )
      .pipe(
        switchMap((res) => {
          return of(res.results.slice(0, 12));
        })
      );
  }

  getTvShowsGenres() {
    return this.http
      .get<GenresDto>(
        `${environment.BASE_URL}/genre/tv/list?api_key=${environment.KEY}`
      )
      .pipe(
        switchMap((res) => {
          return of(res.genres);
        })
      );
  }

  getTvShowsByGenre(genreId: string, pageNumber: number) {
    return this.http
      .get<TvShowDto>(
        `${environment.BASE_URL}/discover/tv?with_genres=${genreId}&page=${pageNumber}&api_key=${environment.KEY}`
      )
      .pipe(
        switchMap((res) => {
          return of(res.results);
        })
      );
  }

  searchTvShows(page: number, searchText?: string) {
    const uri = searchText ? '/search/tv' : '/tv/popular';
    return this.http
      .get<TvShowDto>(
        `${environment.BASE_URL}${uri}?page=${page}&query=${searchText}&api_key=${environment.KEY}`
      )
      .pipe(
        switchMap((res) => {
          return of(res.results);
        })
      );
  }
}
