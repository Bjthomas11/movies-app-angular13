import { TvShowDetailComponent } from './shared/tv-shows/tv-show-detail/tv-show-detail.component';
import { TvShowsComponent } from './shared/tv-shows/tv-shows.component';
import { MovieDetailComponent } from './shared/movies/movie-detail/movie-detail.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { GenresComponent } from './shared/genres/genres.component';
import { MoviesComponent } from './shared/movies/movies.component';
import { HomeComponent } from './shared/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'movies/genres/:genreId', component: MoviesComponent },
  { path: 'movie/:id', component: MovieDetailComponent },
  { path: 'genres', component: GenresComponent },
  { path: 'tvshows', component: TvShowsComponent },
  { path: 'tvshow/:id', component: TvShowDetailComponent },
  { path: 'tvshows/genres/:genreId', component: TvShowsComponent },
  // { path: '404', component: ErrorPageComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
