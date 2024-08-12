import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DegreesToRadiansComponent } from './degrees-to-radians.component';

describe('DegreesToRadiansComponent', () => {
  let component: DegreesToRadiansComponent;
  let fixture: ComponentFixture<DegreesToRadiansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DegreesToRadiansComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DegreesToRadiansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
