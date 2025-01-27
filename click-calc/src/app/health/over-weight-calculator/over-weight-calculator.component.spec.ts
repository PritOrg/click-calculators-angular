import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverWeightCalculatorComponent } from './over-weight-calculator.component';

describe('OverWeightCalculatorComponent', () => {
  let component: OverWeightCalculatorComponent;
  let fixture: ComponentFixture<OverWeightCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OverWeightCalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverWeightCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
