import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLogros } from './form-logros';

describe('FormLogros', () => {
  let component: FormLogros;
  let fixture: ComponentFixture<FormLogros>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormLogros]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormLogros);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
