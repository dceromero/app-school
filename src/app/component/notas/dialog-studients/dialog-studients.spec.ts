import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogStudients } from './dialog-studients';

describe('DialogStudients', () => {
  let component: DialogStudients;
  let fixture: ComponentFixture<DialogStudients>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogStudients]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogStudients);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
