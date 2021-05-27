import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllScoutingComponent } from './all-scouting.component';

describe('AllScoutingComponent', () => {
  let component: AllScoutingComponent;
  let fixture: ComponentFixture<AllScoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllScoutingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllScoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
