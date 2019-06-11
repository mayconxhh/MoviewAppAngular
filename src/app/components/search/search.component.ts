import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../providers/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
  search:string;

  constructor( public _ms:MoviesService,
                private route:ActivatedRoute ) {

    this.route.params.subscribe(params=>{
      if (params['movie']) {
        this.searchMovie(params['movie']);
      }
    })

  }

  ngOnInit() {
  }

  searchMovie(text:string){
    if (text===null) {
      return
    }
    this.search = text;
  	this._ms.searchMovie(text)
  		.subscribe()

  }

}
