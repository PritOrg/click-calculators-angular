import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LongDivisionComponent } from './long-division.component';

describe('LongDivisionComponent', () => {
  let component: LongDivisionComponent;
  let fixture: ComponentFixture<LongDivisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LongDivisionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LongDivisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
