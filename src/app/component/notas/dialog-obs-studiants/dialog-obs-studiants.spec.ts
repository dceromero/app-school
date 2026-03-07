import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogObsStudiants } from './dialog-obs-studiants';

describe('DialogObsStudiants', () => {
  let component: DialogObsStudiants;
  let fixture: ComponentFixture<DialogObsStudiants>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogObsStudiants]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogObsStudiants);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
