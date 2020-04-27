import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetalhesComponent } from './movie-detalhes.component';

describe('MovieDetalhesComponent', () => {
  let component: MovieDetalhesComponent;
  let fixture: ComponentFixture<MovieDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieDetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
