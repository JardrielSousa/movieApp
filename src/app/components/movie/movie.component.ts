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
  myFont = "16px";
  tipoAcessibilidade=false;
  size=false;
  query: string;
  main=true;
  genres:any = [];

  constructor(
    private movieService:MovieService,
    private searchService:SearchService , 
    private router : Router) { }

  ngOnInit() {
    this.main = true
    this.getMovies()
    this.getMoviesGenres()
  }

  getMovies(){
    this.movieService.getMovies().subscribe((movies:any)=>{
      this.searches = movies;
      this.query = movies['query'];
      this.movie = movies['results']
      this.total_results = movies['total_results'];
      this.total_pages = movies['total_pages'];
      this.page = movies['page'];
      this.toggleContrast();
      
    });
    
  }

getMoviesGenres(){
  this.movieService.getMoviesGenres().subscribe((genres:any)=>{
    genres.genres.map(e => {
      this.genres.push(convertToGenreItem(e));
    })      
  })
  
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
 restaurarFonte(){
  this.myFont = "16px";
 }
 searchMovies(query: string, page: number) {
  this.searchService.searchMovies(query,page)
    .subscribe(
      response => {
        this.movies = response['results'];
        this.total_results = response['total_results'];
        this.total_pages = response['total_pages'];
        this.page = response['page'];
      },
      error => console.error(error)
    );
}
 
toggleContrast(){

  debugger
  var Contrast = {
    storage: 'contrastState',
    cssClass: 'contrast',
    currentState: null,
    check: checkContrast,
    getState: getContrastState,
    setState: setContrastState,
    toogle: toogleContrast,
    updateView: updateViewContrast
  };

  this.toggleContrast = function () { Contrast.toogle(); };

  Contrast.check();

  function checkContrast() {
      this.updateView();
  }

  function getContrastState() {
      return localStorage.getItem(this.storage) === 'true';
  }

  function setContrastState(state) {
      localStorage.setItem(this.storage, '' + state);
      this.currentState = state;
      this.updateView();
  }

  function updateViewContrast() {
      var body = document.body;

      if (this.currentState === null)
          this.currentState = this.getState();

      if (this.currentState)
          body.classList.add(this.cssClass);
      else
          body.classList.remove(this.cssClass);
  }

  function toogleContrast() {
      this.setState(!this.currentState);
  }
}

}
export const convertToMovieItem = ({ id, img, title }): any => {
  return { id, backdrop_path: img, original_title: title};
  }
  export const convertToGenreItem = ({ id, name }): any => {
    return { id, name: name };
  } 