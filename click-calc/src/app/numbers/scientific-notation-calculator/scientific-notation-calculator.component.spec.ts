import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScientificNotationCalculatorComponent } from './scientific-notation-calculator.component';

describe('ScientificNotationCalculatorComponent', () => {
  let component: ScientificNotationCalculatorComponent;
  let fixture: ComponentFixture<ScientificNotationCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScientificNotationCalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScientificNotationCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
