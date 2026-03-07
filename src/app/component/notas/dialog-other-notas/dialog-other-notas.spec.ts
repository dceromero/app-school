import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogOtherNotas } from './dialog-other-notas';

describe('DialogOtherNotas', () => {
  let component: DialogOtherNotas;
  let fixture: ComponentFixture<DialogOtherNotas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogOtherNotas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogOtherNotas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
