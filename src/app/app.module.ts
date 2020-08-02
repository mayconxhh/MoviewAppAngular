import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { APP_ROUTING } from './app.routes';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { MoviesService } from './providers/movies.service';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { MovieComponent } from './components/movie/movie.component';
import { ImageMoviePipe } from './pipes/image-movie.pipe';
import { GaleryComponent } from './components/home/galery.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SearchComponent,
    MovieComponent,
    ImageMoviePipe,
    GaleryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    APP_ROUTING
  ],
  providers: [
  	MoviesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
