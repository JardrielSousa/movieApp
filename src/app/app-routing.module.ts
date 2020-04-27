import { SearchComponent } from './components/search/search.component';
import { Error404ComponentComponent } from './components/error404-component/error404-component.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from './components/movie/movie.component';
import { MovieDetalhesComponent } from './components/movie-detalhes/movie-detalhes.component';
import { FilterComponent } from './components/movie/filter/filter.component';
import { AcessibilityComponent } from './components/acessibility/acessibility.component';

const routes: Routes = [
      { path: '', redirectTo: '/movie', pathMatch: 'full' },
      { path: 'movie',component:MovieComponent},
      { path: 'detalhes/:id',component:MovieDetalhesComponent},
      { path: 'filter/:id',component:FilterComponent},
      { path: 'acesso',component:AcessibilityComponent},
      { path:'search/:query',component:SearchComponent },
      { path: '**', component: Error404ComponentComponent  
},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
