import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberSystemConverterComponent } from './number-system-converter.component';

describe('NumberSystemConverterComponent', () => {
  let component: NumberSystemConverterComponent;
  let fixture: ComponentFixture<NumberSystemConverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NumberSystemConverterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberSystemConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
