import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxGstCalculatorComponent } from './tax-gst-calculator.component';

describe('TaxGstCalculatorComponent', () => {
  let component: TaxGstCalculatorComponent;
  let fixture: ComponentFixture<TaxGstCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaxGstCalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxGstCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
