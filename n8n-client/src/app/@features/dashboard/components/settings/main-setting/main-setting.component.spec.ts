import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSettingComponent } from './main-setting.component';

describe('MainSettingComponent', () => {
  let component: MainSettingComponent;
  let fixture: ComponentFixture<MainSettingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainSettingComponent]
    });
    fixture = TestBed.createComponent(MainSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
