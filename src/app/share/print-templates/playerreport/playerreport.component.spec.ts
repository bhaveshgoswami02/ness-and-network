import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerreportComponent } from './playerreport.component';

describe('PlayerreportComponent', () => {
  let component: PlayerreportComponent;
  let fixture: ComponentFixture<PlayerreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
