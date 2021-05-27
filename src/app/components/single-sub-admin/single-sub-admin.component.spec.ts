import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSubAdminComponent } from './single-sub-admin.component';

describe('SingleSubAdminComponent', () => {
  let component: SingleSubAdminComponent;
  let fixture: ComponentFixture<SingleSubAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleSubAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleSubAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
