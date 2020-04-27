import { Genres } from './filter/genres.model';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpClientModule, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Movie } from './movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private url = 'https://api.themoviedb.org/3/movie/';
  private urlMovie = 'https://api.themoviedb.org/3/genre/movie/';
  private apiKey = '6e20392592dc800439e112cec5dc165c';
  private urlGenres = 'https://api.themoviedb.org/3/discover/movie'
genres:Genres[]
  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie[]> {
    let moviesUrl = `${this.url}popular?api_key=${this.apiKey}`;
    return this.http.get<Movie[]>(moviesUrl);
  }
  getDetails(id : string) {
    let detailsUrl = `${this.url}${id}?api_key=${this.apiKey}`;
    return this.http.get<Movie[]>(detailsUrl);
  }
  getMoviesGenres(): Observable<Genres[]> {
    let moviesUrl = `${this.urlMovie}list?api_key=${this.apiKey}`;
    return this.http.get<Genres[]>(moviesUrl);
  }

  getGenreList(idGenre: string):Observable<any>{
    let moviesUrl = `${this.urlGenres}?api_key=${this.apiKey}&with_genres=${idGenre}`;
    return this.http.get(moviesUrl);
  }
}


