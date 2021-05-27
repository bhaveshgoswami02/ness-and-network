import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSubAdminComponent } from './all-sub-admin.component';

describe('AllSubAdminComponent', () => {
  let component: AllSubAdminComponent;
  let fixture: ComponentFixture<AllSubAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllSubAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSubAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
