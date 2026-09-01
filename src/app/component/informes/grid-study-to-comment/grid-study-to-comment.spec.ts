import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridStudyToComment } from './grid-study-to-comment';

describe('GridStudyToComment', () => {
  let component: GridStudyToComment;
  let fixture: ComponentFixture<GridStudyToComment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridStudyToComment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridStudyToComment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
