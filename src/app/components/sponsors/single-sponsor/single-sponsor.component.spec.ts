import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSponsorComponent } from './single-sponsor.component';

describe('SingleSponsorComponent', () => {
  let component: SingleSponsorComponent;
  let fixture: ComponentFixture<SingleSponsorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleSponsorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleSponsorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
