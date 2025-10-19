import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindLogros } from './find-logros';

describe('FindLogros', () => {
  let component: FindLogros;
  let fixture: ComponentFixture<FindLogros>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindLogros]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindLogros);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
