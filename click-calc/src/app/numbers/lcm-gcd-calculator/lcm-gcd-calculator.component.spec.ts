import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LcmGcdCalculatorComponent } from './lcm-gcd-calculator.component';

describe('LcmGcdCalculatorComponent', () => {
  let component: LcmGcdCalculatorComponent;
  let fixture: ComponentFixture<LcmGcdCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LcmGcdCalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LcmGcdCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
