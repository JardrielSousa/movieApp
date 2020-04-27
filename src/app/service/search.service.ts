import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private searchUrl = environment.searchUrl;
  private apiKey = environment.apiKey;

  constructor (private http: HttpClient) {
  }

  searchMovies(query: string,page:number) {
    let searchUrl = `${this.searchUrl}?api_key=${this.apiKey}&query=${query}&language=en-US`;
    return this.http.get(searchUrl);
  }
}
