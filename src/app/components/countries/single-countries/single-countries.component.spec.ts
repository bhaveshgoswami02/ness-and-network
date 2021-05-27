import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCountriesComponent } from './single-countries.component';

describe('SingleCountriesComponent', () => {
  let component: SingleCountriesComponent;
  let fixture: ComponentFixture<SingleCountriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleCountriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
