import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrigCalculatorComponent } from './trig-calculator.component';

describe('TrigCalculatorComponent', () => {
  let component: TrigCalculatorComponent;
  let fixture: ComponentFixture<TrigCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrigCalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrigCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
