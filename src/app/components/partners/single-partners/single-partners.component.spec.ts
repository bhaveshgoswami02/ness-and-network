import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePartnersComponent } from './single-partners.component';

describe('SinglePartnersComponent', () => {
  let component: SinglePartnersComponent;
  let fixture: ComponentFixture<SinglePartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglePartnersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
