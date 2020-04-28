import { Movie } from '../../model/movie.model';
import { Router, ActivatedRoute } from '@angular/router';
import { SearchService } from '../../service/search.service';
import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../service/movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searches: SearchService;
  movies: Movie[];
  total_results: number;
  total_pages: number;
  page: number;  
  query=""
  
  
  constructor(
    private searchService: SearchService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.query = this.route.snapshot.paramMap.get('query')
    this.searchMovies(this.query)
  }

  searchMovies(query: string ){
    this.searchService.searchMovies(query)
      .subscribe(
        response => {
          this.movies = [];
          this.movies = response['results'];
          this.page = response['page'];
        }
      );
  }


}
