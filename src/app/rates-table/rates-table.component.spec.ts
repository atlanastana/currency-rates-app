import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatesTableComponent } from './rates-table.component';

describe('RatesTableComponent', () => {
  let component: RatesTableComponent;
  let fixture: ComponentFixture<RatesTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RatesTableComponent]
    });
    fixture = TestBed.createComponent(RatesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
