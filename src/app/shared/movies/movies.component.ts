import { ActivatedRoute } from '@angular/router';
import { Movie } from './../../core/models/movie';
import { MoviesService } from './../../core/services/movies/movies.service';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  genreId: string | null = null;
  searchText: string = '';

  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe((params) => {
      const { genreId } = params;
      if (genreId) {
        this.genreId = genreId;
        this.getMoviesByGenre(genreId, 1);
      } else {
        this.getPaginatedMovies(1);
      }
    });
  }

  getPaginatedMovies(page: number, searchText?: string) {
    this.moviesService.searchMovies(page, searchText).subscribe((movie) => {
      this.movies = movie;
    });
  }

  getMoviesByGenre(genreId: string, page: number) {
    this.moviesService.getMoviesByGenre(genreId, page).subscribe((movies) => {
      this.movies = movies;
    });
  }

  paginateMovies(event: any) {
    const pageNumber = event.page + 1;
    if (this.genreId) {
      this.getMoviesByGenre(this.genreId, pageNumber);
    } else {
      this.getPaginatedMovies(pageNumber, this.searchText);
    }
  }

  searchInputChanged() {
    this.getPaginatedMovies(1, this.searchText);
  }
}
