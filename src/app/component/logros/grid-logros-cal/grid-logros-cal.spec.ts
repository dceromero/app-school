import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridLogrosCal } from './grid-logros-cal';

describe('GridLogrosCal', () => {
  let component: GridLogrosCal;
  let fixture: ComponentFixture<GridLogrosCal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridLogrosCal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridLogrosCal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
