import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindLogrosCal } from './find-logros-cal';

describe('FindLogrosCal', () => {
  let component: FindLogrosCal;
  let fixture: ComponentFixture<FindLogrosCal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindLogrosCal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindLogrosCal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
