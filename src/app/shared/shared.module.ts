import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';

import { TvShowsComponent } from './tv-shows/tv-shows.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { GenresComponent } from './genres/genres.component';
import { MoviesComponent } from './movies/movies.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './components/slider/slider.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MoviesComponent,
    TvShowsComponent,
    GenresComponent,
    ErrorPageComponent,
    SliderComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MoviesComponent,
    TvShowsComponent,
    GenresComponent,
    ErrorPageComponent,
  ],
  imports: [AppRoutingModule, CommonModule],
})
export class SharedModule {}
