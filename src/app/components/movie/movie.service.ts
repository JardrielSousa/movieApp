import { Genres } from './filter/genres.model';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { Movie } from './movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private url = 'https://api.themoviedb.org/3/movie/';
  private urlgenres = 'https://api.themoviedb.org/3/genre/movie/';
  private apiKey = '6e20392592dc800439e112cec5dc165c';
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
    let moviesUrl = `${this.urlgenres}list?api_key=${this.apiKey}`;
    return this.http.get<Genres[]>(moviesUrl);
  }
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };

}
