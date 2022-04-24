import { Tv } from './../../core/models/tv';
import { TvShowsService } from './../../core/services/tv-shows/tv-shows.service';
import { Movie } from './../../core/models/movie';
import { MoviesService } from './../../core/services/movies/movies.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  popularMovies: Movie[] = [];
  upcomingMovies: Movie[] = [];
  topRatedMovies: Movie[] = [];
  popularTvShows: Tv[] = [];

  constructor(
    private moviesService: MoviesService,
    private tvShowsService: TvShowsService
  ) {}

  ngOnInit(): void {
    this.moviesService.getMovies('popular').subscribe((data: any) => {
      this.popularMovies = data;
    });
    this.moviesService.getMovies('upcoming').subscribe((data: any) => {
      this.upcomingMovies = data;
    });
    this.moviesService.getMovies('top_rated').subscribe((data: any) => {
      this.topRatedMovies = data;
    });
    this.tvShowsService.getTvShows('popular').subscribe((data: any) => {
      this.popularTvShows = data;
    });
  }
}
