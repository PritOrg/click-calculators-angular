import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrigConverterComponent } from './trig-converter.component';

describe('TrigConverterComponent', () => {
  let component: TrigConverterComponent;
  let fixture: ComponentFixture<TrigConverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrigConverterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrigConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
