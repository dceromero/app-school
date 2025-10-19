import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridLogros } from './grid-logros';

describe('GridLogros', () => {
  let component: GridLogros;
  let fixture: ComponentFixture<GridLogros>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridLogros]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridLogros);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
