import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplementaryAngleComponent } from './complementary-angle.component';

describe('ComplementaryAngleComponent', () => {
  let component: ComplementaryAngleComponent;
  let fixture: ComponentFixture<ComplementaryAngleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComplementaryAngleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplementaryAngleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
