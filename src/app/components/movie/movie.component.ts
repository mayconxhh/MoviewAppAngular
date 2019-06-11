import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../providers/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styles: []
})
export class MovieComponent implements OnInit {

	movie:any;
	prevPage:string;
	searched:string;

  constructor( private _ms:MoviesService,
                private route:ActivatedRoute ) {

    this.route.params.subscribe(params=>{
    	this.prevPage = params['route'];
    	if (params['searched']) {
	    	this.searched = params['searched'];    		
    	}
      this._ms.getMovie(params['id'])
      	.subscribe(movie => this.movie = movie);
    })

  }

  ngOnInit() {
  }

}
