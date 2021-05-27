import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleAgenciesComponent } from './single-agencies.component';

describe('SingleAgenciesComponent', () => {
  let component: SingleAgenciesComponent;
  let fixture: ComponentFixture<SingleAgenciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleAgenciesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleAgenciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
