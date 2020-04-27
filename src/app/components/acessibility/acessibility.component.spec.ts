import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcessibilityComponent } from './acessibility.component';

describe('AcessibilityComponent', () => {
  let component: AcessibilityComponent;
  let fixture: ComponentFixture<AcessibilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcessibilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcessibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
