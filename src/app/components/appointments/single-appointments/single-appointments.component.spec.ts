import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleAppointmentsComponent } from './single-appointments.component';

describe('SingleAppointmentsComponent', () => {
  let component: SingleAppointmentsComponent;
  let fixture: ComponentFixture<SingleAppointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleAppointmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
