import { MovieService } from './../../../service/movie.service';
import { Movie } from './../../../model/movie.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/service/search.service';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent implements OnInit {
  movies: Movie[];
  total_results: number;
  total_pages: number;
  page: number;
  language: string;
  sort: number;
  query=""
  myFont="20px";
  
  constructor(
    private searchService:SearchService,
    private movieService:MovieService,
    private route : Router
  ) { }

  ngOnInit() {
  }


  searchMovies(query: string ){
    
    console.log('size:'+query.length)
    if(query.length>0){
      this.route.navigate(['/search/'+query])   
    }else{
      this.movieService.getMovies()
    }

  }
}
