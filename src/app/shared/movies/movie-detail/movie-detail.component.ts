import { Movie } from './../../../core/models/movie';
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

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      // console.log(id);
      this.getMovie(id);
    });
  }

  getMovie(id: string) {
    this.moviesService.getMovieDetail(id).subscribe((movie: any) => {
      this.singleMovie = movie;
      console.log(this.singleMovie);
    });
  }
}
