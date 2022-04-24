import { Movie, MovieVideo, MovieImages } from './../../../core/models/movie';
import { MoviesService } from './../../../core/services/movies/movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit {
  singleMovie: Movie | null = null;
  movieVideos: MovieVideo[] = [];
  movieImages: MovieImages | null = null;

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      // console.log(id);
      this.getMovie(id);
      this.getMovieVideos(id);
      this.getMovieImages(id);
    });
  }

  getMovie(id: string) {
    this.moviesService.getMovieDetail(id).subscribe((movie: any) => {
      this.singleMovie = movie;
    });
  }

  getMovieVideos(id: string) {
    this.moviesService.getMovieDetailVideo(id).subscribe((movieVideo: any) => {
      this.movieVideos = movieVideo.results;
    });
  }

  getMovieImages(id: string) {
    this.moviesService
      .getMovieDetailImages(id)
      .subscribe((movieImages: any) => {
        this.movieImages = movieImages;
      });
  }
}
