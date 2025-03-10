import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryCalculatorComponent } from './salary-calculator.component';

describe('SalaryCalculatorComponent', () => {
  let component: SalaryCalculatorComponent;
  let fixture: ComponentFixture<SalaryCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SalaryCalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalaryCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
