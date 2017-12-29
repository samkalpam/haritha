import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentAFlatComponent } from './rent-a-flat.component';

describe('RentAFlatComponent', () => {
  let component: RentAFlatComponent;
  let fixture: ComponentFixture<RentAFlatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentAFlatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentAFlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
