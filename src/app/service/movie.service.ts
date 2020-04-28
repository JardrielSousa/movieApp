import { environment } from './../../environments/environment';
import { Genres } from '../components/movie/filter/genres.model';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpClientModule, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Movie } from '../model/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private url = environment.url;
  private apiKey = environment.apiKey;
  
genres:Genres[]
  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie[]> {
    let moviesUrl = `${this.url}discover/movie?api_key=${this.apiKey}&language=pt-br`;
    return this.http.get<Movie[]>(moviesUrl);
  }
  getDetails(id : string) {
    let detailsUrl = `${this.url}movie/${id}?api_key=${this.apiKey}&language=pt-br`;
    return this.http.get<Movie[]>(detailsUrl);
  }
  
  getMoviesGenres(): Observable<Genres[]> {
    let moviesUrl = `${this.url}genre/movie/list?api_key=${this.apiKey}&language=pt-br`;
    return this.http.get<Genres[]>(moviesUrl);
  }

  getGenreList(idGenre: string):Observable<any>{
    let moviesUrl = `${this.url}discover/movie?api_key=${this.apiKey}&with_genres=${idGenre}&language=pt-br`;
    return this.http.get(moviesUrl);
  }
}


