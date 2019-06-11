import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageMovie'
})
export class ImageMoviePipe implements PipeTransform {

  transform(movie: any, poster:boolean = false): any {

  	let url = 'http://image.tmdb.org/t/p/w500';

    if (poster) {
      return `${url}${movie.poster_path}`;
    }

  	if (movie.backdrop_path) {
  		return `${url}${movie.backdrop_path}`;
  	} else {
  		if (movie.poster_path) {
  			return `${url}${movie.poster_path}`;
  		} else {
  			return "assets/image/no-image.jpg";
  		}
  	}
  }

}
