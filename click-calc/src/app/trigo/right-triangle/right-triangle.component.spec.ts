import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightTriangleComponent } from './right-triangle.component';

describe('RightTriangleComponent', () => {
  let component: RightTriangleComponent;
  let fixture: ComponentFixture<RightTriangleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RightTriangleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightTriangleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
