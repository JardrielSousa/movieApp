import { Component, OnInit } from '@angular/core';
import { Movie } from './movie.model';
import { MovieService } from './movie.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
import { search } from './search';
import { SearchService } from '../search/search.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})


export class MovieComponent implements OnInit {
  searches: search;
  movie: Movie[];
  movies: Movie[];
  total_results: number;
  total_pages: number;
  page: number;
  count=0;
  details ;
  myFont = "20px";
  tipoAcessibilidade=false;
  size=false;
  query: string;
  public main=true;


  constructor(
    private movieService:MovieService,
    private searchService:SearchService , 
    private router : Router) { }

  ngOnInit() {
    this.main = true
    this.movieService.getMovies().subscribe((movies:any)=>{
      this.searches = movies;
      this.query = movies['query'];
      this.movie = movies['results']
      this.total_results = movies['total_results'];
      this.total_pages = movies['total_pages'];
      this.page = movies['page'];
      console.log(this.searches)
      console.log(this.movie)
      console.log(this.total_results)
      console.log('TOTAL P INIT:'+this.total_pages)
      console.log(this.page)
    });
    
  }

  like(id:number){
       this.movie.forEach(a=>{
        if(a.id === id){
          a.vote_count++
        } 
        });
  }

 enableAcessibilidade(){
    if(this.tipoAcessibilidade){
      this.tipoAcessibilidade=false;
    }else{
      this.tipoAcessibilidade=true;
    }
 }
 enableSize(){
    this.size = true;
 }
 fechar(){
  this.tipoAcessibilidade=false;
  this.size = false;
 }
 searchMovies(query: string, page: number) {
  this.searchService.searchMovies(query,page)
    .subscribe(
      response => {
        this.movies = response['results'];
        this.total_results = response['total_results'];
        this.total_pages = response['total_pages'];
        this.page = response['page'];
        console.log('TOTAL P SE:'+this.total_pages)
      },
      error => console.error(error)
    );
}
 goPage(go: number) {
  let newPage = this.page + go;
  if (newPage <= this.total_pages && newPage >= 1)
    this.searchMovies(this.query, newPage);
}

onSelect(movie: Movie) {
  this.router.navigate(['/movie', movie.id]);
}
}
export const convertToMovieItem = ({ id, img, title }): any => {
  return { id, backdrop_path: img, original_title: title};
  }
