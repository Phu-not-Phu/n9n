import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDuplicateComponent } from './dialog-duplicate.component';

describe('DialogDuplicateComponent', () => {
  let component: DialogDuplicateComponent;
  let fixture: ComponentFixture<DialogDuplicateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogDuplicateComponent]
    });
    fixture = TestBed.createComponent(DialogDuplicateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
