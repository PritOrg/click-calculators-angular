import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactorialCalculatorComponent } from './factorial-calculator.component';

describe('FactorialCalculatorComponent', () => {
  let component: FactorialCalculatorComponent;
  let fixture: ComponentFixture<FactorialCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FactorialCalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FactorialCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
