import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatricesCalcComponent } from './matrices-calc.component';

describe('MatricesCalcComponent', () => {
  let component: MatricesCalcComponent;
  let fixture: ComponentFixture<MatricesCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MatricesCalcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatricesCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
