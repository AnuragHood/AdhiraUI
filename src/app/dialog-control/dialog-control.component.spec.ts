import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogControlComponent } from './dialog-control.component';

describe('DialogControlComponent', () => {
  let component: DialogControlComponent;
  let fixture: ComponentFixture<DialogControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
