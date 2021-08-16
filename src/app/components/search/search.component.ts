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
  language: string;
  sort: number;
  query:string=""
  myFont="20px";
  
  constructor(
    private searchService: SearchService,
    private moviesService: MovieService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    const query = this.route.snapshot.paramMap.get('query')
    this.searchMovies(query,1)
  }

  searchMovies(query: string,page:number) {
    this.searchService.searchMovies(query,page)
      .subscribe(
        response => {
          this.movies = response['results'];
          this.page = response['page'];
        }
      );
  }


}
