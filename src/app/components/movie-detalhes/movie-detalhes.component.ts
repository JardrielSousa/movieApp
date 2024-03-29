import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MovieService } from '../../service/movie.service';

@Component({
  selector: 'app-movie-detalhes',
  templateUrl: './movie-detalhes.component.html',
  styleUrls: ['./movie-detalhes.component.css']
})
export class MovieDetalhesComponent implements OnInit {
movie:any=[];
  constructor(
    private router : Router,
    private route:ActivatedRoute,
    private movieService:MovieService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')
    this.movieService.getDetails(id).subscribe((movies:any) => {
      this.movie.push(convertToMovieItem(movies));
      let movie = JSON.parse(localStorage.getItem('movie'));
      this.movie.forEach(element => {
        element.vote_count = movie.vote_count;
      });
    });

  }
  voltar(){
    this.router.navigate([''])
  }

}
export const convertToMovieItem = ({ id, img, title , genre_ids,overview , popularity , poster_path , release_date , original_language , genres ,production_companies , production_countries , revenue , status ,spoken_languages , vote_count }): any => {
  return { id, backdrop_path: img, original_title: title , genre_ids , overview , popularity , poster_path, release_date , original_language , genres , production_companies , production_countries , revenue , status , spoken_languages , vote_count};
  }
