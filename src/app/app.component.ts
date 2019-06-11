import { Component } from '@angular/core';
import { MoviesService } from './providers/movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MoviesApp';
  search:string;

  constructor( public _ms:MoviesService ){

  	// this._ms.getPopular()
  	// 	.subscribe( data => console.log(data));

   //  // this._ms.getTheatres()
   //  //   .subscribe( data => console.log(data));

  }

  // searchMovies(text:string){

  // 	this._ms.searchMovie(text)
  // 		.subscribe( data => console.log(data));

  // }

}
