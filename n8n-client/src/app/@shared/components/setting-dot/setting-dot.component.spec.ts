import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingDotComponent } from './setting-dot.component';

describe('SettingDotComponent', () => {
  let component: SettingDotComponent;
  let fixture: ComponentFixture<SettingDotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SettingDotComponent]
    });
    fixture = TestBed.createComponent(SettingDotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
