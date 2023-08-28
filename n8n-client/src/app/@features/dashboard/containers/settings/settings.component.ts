import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  constructor(private router: Router) {}

  settingIsOn: boolean = false;
  _currentSettings!: string;
  _currentTab: string = 'personal';

  @Input() set currentNavigation(value: string) {
    this._currentTab = value;
  }

  @Input() set currentSettings(value: string) {
    this._currentSettings = value;
  }

  @Input() set isOpenSettings(value: boolean) {
    this.settingIsOn = value;
  }

  changeNavigation(tab: string) {
    this.router.navigate(['dashboard', tab]);
    this._currentSettings = tab;
  }
}
