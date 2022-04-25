import { take } from 'rxjs';
import { Tv } from './../../core/models/tv';
import { TvShowsService } from './../../core/services/tv-shows/tv-shows.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.scss'],
})
export class TvShowsComponent implements OnInit {
  tvShows: Tv[] = [];
  genreId: string | null = null;
  searchText: string = '';

  constructor(
    private tvShowsService: TvShowsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe((params) => {
      const { genreId } = params;
      if (genreId) {
        this.genreId = genreId;
        this.getTvShowsByGenre(genreId, 1);
      } else {
        this.getPaginatedTvShows(1);
      }
    });
  }

  getPaginatedTvShows(page: number, searchText?: string) {
    this.tvShowsService.searchTvShows(page, searchText).subscribe((tvShow) => {
      this.tvShows = tvShow;
    });
  }

  getTvShowsByGenre(genreId: string, page: number) {
    this.tvShowsService.getTvShowsByGenre(genreId, page).subscribe((tvShow) => {
      this.tvShows = tvShow;
    });
  }

  paginateMovies(event: any) {
    const pageNumber = event.page + 1;
    if (this.genreId) {
      this.getTvShowsByGenre(this.genreId, pageNumber);
    } else {
      this.getPaginatedTvShows(pageNumber, this.searchText);
    }
  }

  searchInputChanged() {
    this.getPaginatedTvShows(1, this.searchText);
  }
}
