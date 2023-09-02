import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortListBoxComponent } from './sort-list-box.component';

describe('SortListBoxComponent', () => {
  let component: SortListBoxComponent;
  let fixture: ComponentFixture<SortListBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SortListBoxComponent]
    });
    fixture = TestBed.createComponent(SortListBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
