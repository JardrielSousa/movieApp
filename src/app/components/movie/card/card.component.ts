import { search } from '../../../model/search';
import { MovieService } from '../../../service/movie.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from '../../../model/movie.model';
import { Genres } from './genres.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  movie:Movie[]
  genres:any = [];
  genresSelected:any = [];
  searches: search;
  movies: Movie[];
  moviesGenres:Movie[];
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
    const id = this.route.snapshot.paramMap.get('id');
    this.movieService.getMoviesGenres().subscribe((genres:any)=>{
      genres.genres.map(e => {
        this.genres.push(convertToGenreItem(e));
      })
    })
    this.movieService.getGenreList(id).subscribe((m:any)=>{
      this.moviesGenres = m.results

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

  }

}
export const convertToGenreItem = ({ id, name }): any => {
  return { id, name: name };
  }
  export const convertToMovieItem = ({ id, title }): any => {
    return { id, title: title };
    }


