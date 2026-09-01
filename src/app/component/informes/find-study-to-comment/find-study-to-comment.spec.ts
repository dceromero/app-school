import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindStudyToComment } from './find-study-to-comment';

describe('FindStudyToComment', () => {
  let component: FindStudyToComment;
  let fixture: ComponentFixture<FindStudyToComment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindStudyToComment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindStudyToComment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
