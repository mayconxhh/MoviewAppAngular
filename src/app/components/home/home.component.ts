import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../providers/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

	moviesTheatres:any =[];
  popularMovies:any = [];
  popularKids:any =[];

  constructor( public _ms:MoviesService ) {

  	this._ms.getTheatres(true)
      .subscribe( data => this.moviesTheatres = data);

    this._ms.getPopular(true)
      .subscribe( data => this.popularMovies = data);

    this._ms.getPopularKids(true)
      .subscribe( data => this.popularKids = data);

  }

  ngOnInit() {
  }

}
