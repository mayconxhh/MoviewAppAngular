import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { MovieComponent } from './components/movie/movie.component';

const app_routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'search', component: SearchComponent },
	{ path: 'search/:movie', component: SearchComponent },
	{ path: 'movie/:id/:route', component: MovieComponent },
	{ path: 'movie/:id/:route/:searched', component: MovieComponent },
	{ path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(app_routes);