import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreCardComponent } from './cre-card.component';

describe('CreCardComponent', () => {
  let component: CreCardComponent;
  let fixture: ComponentFixture<CreCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreCardComponent]
    });
    fixture = TestBed.createComponent(CreCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
