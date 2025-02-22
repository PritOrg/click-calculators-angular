import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SipCalcComponent } from './sip-calc.component';

describe('SipCalcComponent', () => {
  let component: SipCalcComponent;
  let fixture: ComponentFixture<SipCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SipCalcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SipCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
