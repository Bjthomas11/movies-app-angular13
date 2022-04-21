import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TvShowsService {
  constructor(private http: HttpClient) {}

  getTvShows(type: string) {
    return this.http.get(
      `${environment.BASE_URL}/tv/${type}?api_key=${environment.KEY}`
    );
  }
}
