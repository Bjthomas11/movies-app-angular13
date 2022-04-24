import { TvDto } from './../../models/tv';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TvShowsService {
  constructor(private http: HttpClient) {}

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
