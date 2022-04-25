import { Item } from '../components/items-banner/item/Item';
import { TvShowsService } from './../../core/services/tv-shows/tv-shows.service';
import { mapTvShowToItem } from './../../core/models/tv';

import { Movie, mapMovieToItem } from './../../core/models/movie';
import { MoviesService } from './../../core/services/movies/movies.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  popularMovies: Item[] = [];
  upcomingMovies: Item[] = [];
  topRatedMovies: Item[] = [];
  popularTvShows: Item[] = [];

  constructor(
    private moviesService: MoviesService,
    private tvShowsService: TvShowsService
  ) {}

  ngOnInit(): void {
    this.moviesService.getMovies('popular').subscribe((movies) => {
      this.popularMovies = movies.map((movie) => mapMovieToItem(movie));
    });
    this.moviesService.getMovies('top_rated').subscribe((movies) => {
      this.topRatedMovies = movies.map((movie) => mapMovieToItem(movie));
    });
    this.moviesService.getMovies('upcoming').subscribe((movies) => {
      this.upcomingMovies = movies.map((movie) => mapMovieToItem(movie));
    });
    this.tvShowsService.getTvShows('popular').subscribe((tvShows) => {
      this.popularTvShows = tvShows.map((tvshow) => mapTvShowToItem(tvshow));
    });
  }
}
