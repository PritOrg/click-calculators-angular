import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableGeneratorComponent } from './table-generator.component';

describe('TableGeneratorComponent', () => {
  let component: TableGeneratorComponent;
  let fixture: ComponentFixture<TableGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableGeneratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
