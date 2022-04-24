import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';

import { ErrorPageComponent } from './error-page/error-page.component';
import { GenresComponent } from './genres/genres.component';
import { MoviesComponent } from './movies/movies.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { ItemsBannerComponent } from './components/items-banner/items-banner.component';
import { ItemComponent } from './components/items-banner/item/item.component';
import { PaginatorModule } from 'primeng/paginator';
import { TabViewModule } from 'primeng/tabview';
import { ImageModule } from 'primeng/image';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { IframeComponent } from './components/iframe/iframe.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MoviesComponent,
    GenresComponent,
    ErrorPageComponent,
    SliderComponent,
    ItemsBannerComponent,
    ItemComponent,
    MovieDetailComponent,
    IframeComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MoviesComponent,
    GenresComponent,
    ErrorPageComponent,
    ItemsBannerComponent,
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    PaginatorModule,
    TabViewModule,
    ImageModule,
  ],
})
export class SharedModule {}
