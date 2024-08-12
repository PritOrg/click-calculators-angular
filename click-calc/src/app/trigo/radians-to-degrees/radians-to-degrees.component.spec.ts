import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadiansToDegreesComponent } from './radians-to-degrees.component';

describe('RadiansToDegreesComponent', () => {
  let component: RadiansToDegreesComponent;
  let fixture: ComponentFixture<RadiansToDegreesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RadiansToDegreesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadiansToDegreesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
