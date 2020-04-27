import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private searchUrl = 'https://api.themoviedb.org/3/search/movie';
  private apiKey = '68b4fe2a513155a58dd0af4adacb281b';
  private language;

  constructor (private http: HttpClient) {
  }

  searchMovies(query: string,page:number) {
    let searchUrl = `${this.searchUrl}?api_key=${this.apiKey}&query=${query}&language=en-US&page=${page}&include_adult=false`;
    return this.http.get(searchUrl);
  }
}
