import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberSystemOperationsComponent } from './number-system-operations.component';

describe('NumberSystemOperationsComponent', () => {
  let component: NumberSystemOperationsComponent;
  let fixture: ComponentFixture<NumberSystemOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NumberSystemOperationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberSystemOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
