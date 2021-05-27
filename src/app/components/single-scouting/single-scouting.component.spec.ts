import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleScoutingComponent } from './single-scouting.component';

describe('SingleScoutingComponent', () => {
  let component: SingleScoutingComponent;
  let fixture: ComponentFixture<SingleScoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleScoutingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleScoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
