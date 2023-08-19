import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExeCardComponent } from './exe-card.component';

describe('ExeCardComponent', () => {
  let component: ExeCardComponent;
  let fixture: ComponentFixture<ExeCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExeCardComponent]
    });
    fixture = TestBed.createComponent(ExeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
