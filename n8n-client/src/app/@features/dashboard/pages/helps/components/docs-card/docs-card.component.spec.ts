import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsCardComponent } from './docs-card.component';

describe('DocsCardComponent', () => {
  let component: DocsCardComponent;
  let fixture: ComponentFixture<DocsCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocsCardComponent]
    });
    fixture = TestBed.createComponent(DocsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
