import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleClubsComponent } from './single-clubs.component';

describe('SingleClubsComponent', () => {
  let component: SingleClubsComponent;
  let fixture: ComponentFixture<SingleClubsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleClubsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleClubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
