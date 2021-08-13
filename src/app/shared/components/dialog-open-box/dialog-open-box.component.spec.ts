import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogOpenBoxComponent } from './dialog-open-box.component';

describe('DialogOpenBoxComponent', () => {
  let component: DialogOpenBoxComponent;
  let fixture: ComponentFixture<DialogOpenBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogOpenBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogOpenBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
