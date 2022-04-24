import { TvDto } from './../../models/tv';
import { MovieDto } from './../../models/movie';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Movie } from '../../models/movie';
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
