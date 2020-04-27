import {HttpClient} from '@angular/common/http'
import {HttpClientModule} from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './components/template/cabecalho/cabecalho.component';
import { RodapeComponent } from './components/template/rodape/rodape.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MovieComponent } from './components/movie/movie.component';
import { MovieDetalhesComponent } from './components/movie-detalhes/movie-detalhes.component';
import {MatIconModule} from '@angular/material/icon';
import { SearchComponent } from './components/search/search.component';
import { AcessibilityComponent } from './components/acessibility/acessibility.component';
import {MatPaginatorModule} from '@angular/material/paginator'
import {MatFormFieldModule} from '@angular/material/form-field';
import { FilterComponent } from './components/movie/filter/filter.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { Error404ComponentComponent } from './components/error404-component/error404-component.component';
@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    MovieComponent,
    MovieDetalhesComponent,
    SearchComponent,
    AcessibilityComponent,
    FilterComponent,
    Error404ComponentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule ,
    MatToolbarModule,
    MatCardModule,
    HttpClientModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
