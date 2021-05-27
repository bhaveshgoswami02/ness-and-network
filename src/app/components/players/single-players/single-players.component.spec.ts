import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePlayersComponent } from './single-players.component';

describe('SinglePlayersComponent', () => {
  let component: SinglePlayersComponent;
  let fixture: ComponentFixture<SinglePlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglePlayersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
