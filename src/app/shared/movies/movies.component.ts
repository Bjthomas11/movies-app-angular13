import { Movie } from './../../core/models/movie';
import { MoviesService } from './../../core/services/movies/movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getMovies('popular', 20).subscribe((movie) => {
      this.movies = movie;
    });
  }
}
