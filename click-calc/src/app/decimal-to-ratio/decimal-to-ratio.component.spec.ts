import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecimalToRatioComponent } from './decimal-to-ratio.component';

describe('DecimalToRatioComponent', () => {
  let component: DecimalToRatioComponent;
  let fixture: ComponentFixture<DecimalToRatioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DecimalToRatioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecimalToRatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
