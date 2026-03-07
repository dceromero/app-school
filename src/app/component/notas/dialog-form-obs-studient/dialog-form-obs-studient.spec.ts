import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogFormObsStudient } from './dialog-form-obs-studient';

describe('DialogFormObsStudient', () => {
  let component: DialogFormObsStudient;
  let fixture: ComponentFixture<DialogFormObsStudient>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogFormObsStudient]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogFormObsStudient);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
