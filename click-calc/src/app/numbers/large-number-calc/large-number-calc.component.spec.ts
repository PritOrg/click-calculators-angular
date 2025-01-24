import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeNumberCalcComponent } from './large-number-calc.component';

describe('LargeNumberCalcComponent', () => {
  let component: LargeNumberCalcComponent;
  let fixture: ComponentFixture<LargeNumberCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LargeNumberCalcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LargeNumberCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
