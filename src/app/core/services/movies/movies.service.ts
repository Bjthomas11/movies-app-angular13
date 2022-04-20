import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getMovies(type: string) {
    return this.http.get(
      `${environment.BASE_URL}/movie/${type}?api_key=${environment.KEY}`
    );
  }
}
