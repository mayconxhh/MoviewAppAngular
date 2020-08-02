import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

	private apiKey:string = environment.API_KEY;
	private urlMoviedb:string = 'https://api.themoviedb.org/3';
  public movies:any = [];

  constructor( private http:HttpClient ) { }

  getPopular(value:boolean){

  	let url = `${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}&language=es`;

  	return this.http.get<any>(url)
  		.pipe(map( (res ) => {

        if (value) {
          return this.fixObject(res.results);
        } else {
          return res.results;
        }

      }));

  }

  searchMovie( text:string ){
  	
  	let url = `${this.urlMoviedb}/search/movie?api_key=${this.apiKey}&query=${text}&sort_by=popularity.desc`;

  	return this.http.get<any>( url )
  		.pipe(map( res => {
        this.movies = res.results;
        return res.results;
      } ));

  }

  getTheatres(value:boolean){

  	let date = new Date();

  	let prevWeek= new Date(date.getTime() - (24*60*60*1000)*7);
  	let formatPW = `${prevWeek.getFullYear()}-${prevWeek.getMonth()+1}-${prevWeek.getUTCDate()}`;

  	let nextWeek= new Date(date.getTime() + (24*60*60*1000)*7);
    let formatNW = `${nextWeek.getFullYear()}-${nextWeek.getMonth()+1}-${nextWeek.getUTCDate()}`;

  	let url = `${this.urlMoviedb}/discover/movie?primary_release_date.gte=${formatPW}&primary_release_date.lte=${formatNW}&api_key=${this.apiKey}&language=es`;

  	return this.http.get<any>( url)
  		.pipe(map( res => {

        if (value) {
          return this.fixObject(res.results);
        } else {
          return res.results;
        }

      }));
  }

  getPopularKids(value:boolean){
    let url = `${this.urlMoviedb}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apiKey}&language=es`;

    return this.http.get<any>( url)
      .pipe(map( res => {

        if (value) {
          return this.fixObject(res.results);
        } else {
          return res.results;
        }

      }))
  }

  getMovie(id:string){

    let url = `${this.urlMoviedb}/movie/${id}?api_key=${this.apiKey}&language=es`;

    return this.http.get<any>( url)
      .pipe(map( res => res));
  }

  fixObject(movies:any){

    if(movies.length === 0) return {};

    let left:any = [];
    let right:any = [];
    for (var i = 0 ; i <= 2; i++) {
      left.push(movies[i]);
    }

    for (var i = 3 ; i <= 5; i++) {
      right.push(movies[i]);
    }

    return { left, right };
  }

}
