import { search } from './../search';
import { MovieService } from './../movie.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie.model';
import { Genres } from './genres.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
movie:Movie[]
genres:any = [];
genresSelected:any = [];
searches: search;
  movies: Movie[];
  total_results: number;
  total_pages: number;
  page: number;
  query: string;
  resul:any;


  constructor(
    private movieService:MovieService,
    private route : ActivatedRoute
  ) { }

  ngOnInit() {
    this.movieService.getMoviesGenres().subscribe((genres:any)=>{
      genres.genres.map(e => {
        this.genres.push(convertToGenreItem(e));
      })      
    })
  
  }

  findMovie(id){
    console.log('id'+id)
    
    this.movieService.getMovies().subscribe((movies:any)=>{
      this.searches = movies;
      this.query = movies['query'];
      this.movie = movies['results']
      this.total_results = movies['total_results'];
      this.total_pages = movies['total_pages'];
      this.page = movies['page'];

      
    });

    this.movieService.getMoviesGenres().subscribe((genres:any)=>{
      genres.genres.map(e => {
        if(convertToGenreItem(e).id===id){
          this.genresSelected.push(convertToGenreItem(e));
          console.log('selected:'+this.genresSelected)
        }
      })      
    })
  }
  
}
export const convertToGenreItem = ({ id, name }): any => {
  return { id, name: name };
  }
  export const convertToMovieItem = ({ id, title }): any => {
    return { id, title: title };
    }


    