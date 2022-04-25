import { first } from 'rxjs';
import { TvShowsService } from './../../../core/services/tv-shows/tv-shows.service';
import { ActivatedRoute } from '@angular/router';
import { Tv, TvVideo, TvImages, TvCredits } from './../../../core/models/tv';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tv-show-detail',
  templateUrl: './tv-show-detail.component.html',
  styleUrls: ['./tv-show-detail.component.scss'],
})
export class TvShowDetailComponent implements OnInit {
  singleTvShow: Tv | null = null;
  tvShowVideos: TvVideo[] = [];
  tvShowImages: TvImages | null = null;
  tvShowCredits: TvCredits | null = null;
  similarTvShows: Tv[] | null = null;

  constructor(
    private route: ActivatedRoute,
    private tvShowsService: TvShowsService
  ) {}

  ngOnInit(): void {
    this.route.params.pipe(first()).subscribe(({ id }) => {
      this.getTvShow(id);
      this.getTvShowVideos(id);
      this.getTvShowImages(id);
      this.getTvShowCredits(id);
      this.getSimilarTvShows(id);
    });
  }

  ngOnDestroy() {
    console.log('destoryed');
  }

  getTvShow(id: string) {
    this.tvShowsService.getTvShowDetail(id).subscribe((tvShow: any) => {
      this.singleTvShow = tvShow;
    });
  }

  getTvShowVideos(id: string) {
    this.tvShowsService
      .getTvShowDetailVideo(id)
      .subscribe((tvShowVideo: any) => {
        this.tvShowVideos = tvShowVideo.results;
      });
  }

  getTvShowImages(id: string) {
    this.tvShowsService
      .getTvShowDetailImages(id)
      .subscribe((tvShowImages: any) => {
        this.tvShowImages = tvShowImages;
      });
  }

  getTvShowCredits(id: string) {
    this.tvShowsService.getTvShowDetailCredits(id).subscribe((credit: any) => {
      this.tvShowCredits = credit;
    });
  }

  getSimilarTvShows(id: string) {
    this.tvShowsService.getSimilarTvShows(id).subscribe((similar: any) => {
      this.similarTvShows = similar;
    });
  }
}
