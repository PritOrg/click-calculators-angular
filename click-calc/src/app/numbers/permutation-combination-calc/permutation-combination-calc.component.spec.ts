import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermutationCombinationCalcComponent } from './permutation-combination-calc.component';

describe('PermutationCombinationCalcComponent', () => {
  let component: PermutationCombinationCalcComponent;
  let fixture: ComponentFixture<PermutationCombinationCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PermutationCombinationCalcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PermutationCombinationCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
