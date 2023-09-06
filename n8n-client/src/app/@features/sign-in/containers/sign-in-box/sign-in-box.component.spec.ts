import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInBoxComponent } from './sign-in-box.component';

describe('SignInBoxComponent', () => {
  let component: SignInBoxComponent;
  let fixture: ComponentFixture<SignInBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignInBoxComponent]
    });
    fixture = TestBed.createComponent(SignInBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
